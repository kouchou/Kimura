// 初期配置の配列
var initPosition = [
  [{"owner": "black", "kind": "KY"}, {"owner": "black", "kind": "KE"}, {"owner": "black", "kind": "GI"}, {"owner": "black", "kind": "KI"}, {"owner": "black", "kind": "OU"}, {"owner": "black", "kind": "KI"}, {"owner": "black", "kind": "GI"}, {"owner": "black", "kind": "KE"}, {"owner": "black", "kind": "KY"}],
  [{}, {"owner": "black", "kind": "HI"}, {}, {}, {}, {}, {}, {"owner": "black", "kind": "KA"}, {}],
  [{"owner": "black", "kind": "FU"}, {"owner": "black", "kind": "FU"}, {"owner": "black", "kind": "FU"}, {"owner": "black", "kind": "FU"}, {"owner": "black", "kind": "FU"}, {"owner": "black", "kind": "FU"}, {"owner": "black", "kind": "FU"}, {"owner": "black", "kind": "FU"}, {"owner": "black", "kind": "FU"}],
  [{}, {}, {}, {}, {}, {}, {}, {}, {}],
  [{}, {}, {}, {}, {}, {}, {}, {}, {}],
  [{}, {}, {}, {}, {}, {}, {}, {}, {}],
  [{"owner": "white", "kind": "KY"}, {"owner": "white", "kind": "KE"}, {"owner": "white", "kind": "GI"}, {"owner": "white", "kind": "KI"}, {"owner": "white", "kind": "OU"}, {"owner": "white", "kind": "KI"}, {"owner": "white", "kind": "GI"}, {"owner": "white", "kind": "KE"}, {"owner": "white", "kind": "KY"}],
  [{}, {"owner": "white", "kind": "HI"}, {}, {}, {}, {}, {}, {"owner": "white", "kind": "KA"}, {}],
  [{"owner": "white", "kind": "FU"}, {"owner": "white", "kind": "FU"}, {"owner": "white", "kind": "FU"}, {"owner": "white", "kind": "FU"}, {"owner": "white", "kind": "FU"}, {"owner": "white", "kind": "FU"}, {"owner": "white", "kind": "FU"}, {"owner": "white", "kind": "FU"}, {"owner": "white", "kind": "FU"}]
]

var createKoma = function(position) {
  // #boardのelementを取得
  var $Board = document.getElementById("board");

  // パフォーマンスのためにfragmentを使って1回のDOMアクセスにする
  // fragmentをつくる
  var komaFragment = document.createDocumentFragment();
  // fragmentに要素を入れていく
  position.forEach(function(row, index) {
    row.forEach(function(cell, index) {
      var $element = document.createElement("div");
      $element.classList.add("cell");
      if (!Object.keys(cell).length) {
        komaFragment.appendChild($element);
        return;
      }
      $element.classList.add(cell["owner"]);
      $element.classList.add(cell["kind"]);
      komaFragment.appendChild($element);
    });
  });
  // boardの子要素に追加する
  $Board.appendChild(komaFragment);
}

createKoma(initPosition);