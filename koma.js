// ----------------------------------------------------------------
// Koma Object
// ----------------------------------------------------------------
var Koma = {};

// Private Functions
// ----------------------------------------------------------------
// [関数]駒がクリックされたときの処理
Koma.komaClickHundler_ = function($Element) {
  if (Store.getSelectedItem()) {
    // 選択状態の時
    var $SelectedElement = Store.getSelectedItem();
    var elementId = Koma.getIdByElement($Element);
    var selectedElementId = Koma.getIdByElement($SelectedElement);
    // 棋譜を追加
    // -----------------------------------------------
    Koma.addKifu_($SelectedElement, $Element);
    
    // boardステータスを更新
    // -----------------------------------------------
    // 選択した駒で置き換え
    Koma.changeKomaAtBoard_(
      elementId,
      Koma.getKomaAtBoard_(selectedElementId)
    );
    // もともとあった駒を空に
    Koma.changeKomaAtBoard_(
      selectedElementId,
      {}
    );
    
    // DOM操作
    // -----------------------------------------------
    // 選択されている駒のクラス名を上書き
    $Element.className = $SelectedElement.className;
    // もともとあった位置を通常のセルに戻す
    $SelectedElement.className = "cell";
    // 選択状態を解除
    Store.setSelectedItem(null);
    // 手番交代
    Koma.changeTurn_();
  } else {
    // 未選択状態の時
    // 現在の手番と、クリックした駒の所有者が同じ場合、選択状態へ
    if (Koma.getOwnerByElement($Element) === Store.getTurn()) {
      Store.setSelectedItem($Element);
      return;
    }
  }
};

// 手番交代
Koma.changeTurn_ = function() {
    if (Store.getTurn() === "white") {
      Store.setTurn("black");
    } else {
      Store.setTurn("white");
    }
};

// 駒のIDから、boardステータスの駒オブジェクトを取得
Koma.getKomaAtBoard_ = function(id) {
  var board = Store.getBoard();
  var row = parseInt((id - 1) / 9);
  var col = (id - 1) % 9;
  return board[row][col];
};
// 指定した駒のIDの駒を、指定した駒オブジェクトで置き換える
Koma.changeKomaAtBoard_ = function(id, koma) {
  var board = Store.getBoard();
  var row = parseInt((id - 1) / 9);
  var col = (id - 1) % 9;
  board[row][col] = koma;
  Store.setBoard(board);
};

// 棋譜追加
Koma.addKifu_ = function($ElementFrom, $ElementTo) {
  var owner = Store.getTurn();
  var kind = Koma.getKomaAtBoard_(Koma.getIdByElement($ElementFrom)).kind;
  var from = Koma.getCoordinatesById(Koma.getIdByElement($ElementFrom));
  var to = Koma.getCoordinatesById(Koma.getIdByElement($ElementTo));
  var nari = "funari";
  Store.addKifu(owner, kind, from, to, nari);
};

// Public Functions
// ----------------------------------------------------------------
// 与えられた配置の配列に従って盤面を生成する -> null
Koma.create = function(position) {
  // #boardのelementを取得
  var $Board = document.getElementById("board");

  // パフォーマンスのためにfragmentを使って1回のDOMアクセスにする
  // fragmentをつくる
  var komaFragment = document.createDocumentFragment();
  // fragmentに要素を入れていく
  position.forEach(function(row, colIndex) {
    row.forEach(function(cell, rowIndex) {
      // div要素を生成
      var $Element = document.createElement("div");
      // cellクラスを付与
      $Element.classList.add("cell");
      // セルIDを付与
      $Element.id = "cell" + (colIndex * 9 + rowIndex + 1);
      // イベントリスナーを設定
      $Element.onclick = function(event) {
        Koma.komaClickHundler_(event.target);
      };
      // 空のオブジェクトならそのまま追加して次のループへ
      if (!Object.keys(cell).length) {
        komaFragment.appendChild($Element);
        return;
      }
      $Element.classList.add(cell.owner);
      $Element.classList.add(cell.kind);
      komaFragment.appendChild($Element);
    });
  });
  // boardエレメントの子要素に追加する
  $Board.appendChild(komaFragment);
};

// エレメントからIDを取得する
Koma.getIdByElement = function($Element) {
  return $Element.id.substr(4);
};
// IDから座標を取得する -> [int, int]
Koma.getCoordinatesById = function(id) {
  var y = parseInt((id - 1) / 9) + 1;
  var x = 9 - (id - 1) % 9;
  return [x, y];
};
// 座標からIDを取得する -> int
Koma.getIdByCoordinates = function(coordinates) {
  return (coordinates[1] - 1) * 9 + (10 - coordinates[0]);
};

// 要素のエレメントを引数に取り、それが先手なのか後手なのか空白なのかを返す -> string
Koma.getOwnerByElement = function($Element) {
  if ($Element.classList.contains("white")) {
    return "white";
  } else if ($Element.classList.contains("black")) {
    return "black";
  } else {
    return "none";
  }
};

// 先手後手、駒の種類、座標を引数にとり、そのセルをその種類のコマに置き替える -> null
Koma.place = function(owner, kind, coordinates) {
  var cellId = "cell" + Koma.getIdByCoordinates(coordinates);
  var $Element = document.getElementById(cellId);
  $Element.className = "cell" + " " + owner + " " + kind;
};