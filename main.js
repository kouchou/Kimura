// 初期配置の配列
var initPosition = [
  [{"owner": "black", "kind": "KY"}, {"owner": "black", "kind": "KE"}, {"owner": "black", "kind": "GI"}, {"owner": "black", "kind": "KI"}, {"owner": "black", "kind": "OU"}, {"owner": "black", "kind": "KI"}, {"owner": "black", "kind": "GI"}, {"owner": "black", "kind": "KE"}, {"owner": "black", "kind": "KY"}],
  [{}, {"owner": "black", "kind": "HI"}, {}, {}, {}, {}, {}, {"owner": "black", "kind": "KA"}, {}],
  [{"owner": "black", "kind": "FU"}, {"owner": "black", "kind": "FU"}, {"owner": "black", "kind": "FU"}, {"owner": "black", "kind": "FU"}, {"owner": "black", "kind": "FU"}, {"owner": "black", "kind": "FU"}, {"owner": "black", "kind": "FU"}, {"owner": "black", "kind": "FU"}, {"owner": "black", "kind": "FU"}],
  [{}, {}, {}, {}, {}, {}, {}, {}, {}],
  [{}, {}, {}, {}, {}, {}, {}, {}, {}],
  [{}, {}, {}, {}, {}, {}, {}, {}, {}],
  [{"owner": "white", "kind": "FU"}, {"owner": "white", "kind": "FU"}, {"owner": "white", "kind": "FU"}, {"owner": "white", "kind": "FU"}, {"owner": "white", "kind": "FU"}, {"owner": "white", "kind": "FU"}, {"owner": "white", "kind": "FU"}, {"owner": "white", "kind": "FU"}, {"owner": "white", "kind": "FU"}],
  [{}, {"owner": "white", "kind": "KA"}, {}, {}, {}, {}, {}, {"owner": "white", "kind": "HI"}, {}],
  [{"owner": "white", "kind": "KY"}, {"owner": "white", "kind": "KE"}, {"owner": "white", "kind": "GI"}, {"owner": "white", "kind": "KI"}, {"owner": "white", "kind": "GY"}, {"owner": "white", "kind": "KI"}, {"owner": "white", "kind": "GI"}, {"owner": "white", "kind": "KE"}, {"owner": "white", "kind": "KY"}]
]

// [関数]与えられた配置の配列に従って盤面を生成する -> null
var createKoma = function(position) {
  // #boardのelementを取得
  var $Board = document.getElementById("board");

  // パフォーマンスのためにfragmentを使って1回のDOMアクセスにする
  // fragmentをつくる
  var komaFragment = document.createDocumentFragment();
  // fragmentに要素を入れていく
  position.forEach(function(row, colIndex) {
    row.forEach(function(cell, rowIndex) {
      // div要素を生成
      var $element = document.createElement("div");
      // cellクラスを付与
      $element.classList.add("cell");
      // セルIDを付与
      $element.id = "cell" + (colIndex * 9 + rowIndex + 1);
      // イベントリスナーを設定
      $element.onclick = function(event) {
        komaClickHundler(event.target);
      }
      // 空のオブジェクトならそのまま追加して次のループへ
      if (!Object.keys(cell).length) {
        komaFragment.appendChild($element);
        return;
      }
      $element.classList.add(cell["owner"]);
      $element.classList.add(cell["kind"]);
      komaFragment.appendChild($element);
    });
  });
  // boardエレメントの子要素に追加する
  $Board.appendChild(komaFragment);
}

createKoma(initPosition);

// [関数]IDから座標を取得する -> [int, int]
var getCoordinatesById = function(id) {
  y = parseInt((id - 1) / 9) + 1;
  x = 9 - (id - 1) % 9;
  return [x, y];
}
// [関数]座標からIDを取得する -> int
var getIDbyCoordinates = function(x, y) {
  return (y - 1) * 9 + (10 - x);
}

// [関数]要素のエレメントを引数に取り、が先手なのか後手なのか空白なのか -> string
var getOwner = function($element) {
  if ($element.classList.contains("white")) {
    return "white";
  } else if ($element.classList.contains("black")) {
    return "black";
  } else {
    return "none";
  }
}

// [関数]先手後手、駒の種類、セルIDを引数にとり、そのセルをその種類のコマに替える -> null
var placeKoma = function(owner, kind, cellId) {
  var $element = document.getElementById(cellId);
  $element.className = "cell" + " " + owner + " " + kind;
}

// [関数]駒がクリックされたときの処理
komaClickHundler = function($element) {
  var cellID = $element.id;
  placeKoma("white", "FU", cellID);  
}

