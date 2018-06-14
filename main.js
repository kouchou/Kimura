// 初期配置の配列
var board = [
  [{"owner": 1, "kind": "KY"}, {"owner": 1, "kind": "KE"}, {"owner": 1, "kind": "GI"}, {"owner": 1, "kind": "KI"}, {"owner": 1, "kind": "OU"}, {"owner": 1, "kind": "KI"}, {"owner": 1, "kind": "GI"}, {"owner": 1, "kind": "KE"}, {"owner": 1, "kind": "KY"}],
  [{}, {"owner": 1, "kind": "HI"}, {}, {}, {}, {}, {}, {"owner": 1, "kind": "KA"}, {}],
  [{"owner": 1, "kind": "FU"}, {"owner": 1, "kind": "FU"}, {"owner": 1, "kind": "FU"}, {"owner": 1, "kind": "FU"}, {"owner": 1, "kind": "FU"}, {"owner": 1, "kind": "FU"}, {"owner": 1, "kind": "FU"}, {"owner": 1, "kind": "FU"}, {"owner": 1, "kind": "FU"}],
  [{}, {}, {}, {}, {}, {}, {}, {}, {}],
  [{}, {}, {}, {}, {}, {}, {}, {}, {}],
  [{}, {}, {}, {}, {}, {}, {}, {}, {}],
  [{"owner": 0, "kind": "KY"}, {"owner": 0, "kind": "KE"}, {"owner": 0, "kind": "GI"}, {"owner": 0, "kind": "KI"}, {"owner": 0, "kind": "OU"}, {"owner": 0, "kind": "KI"}, {"owner": 0, "kind": "GI"}, {"owner": 0, "kind": "KE"}, {"owner": 0, "kind": "KY"}],
  [{}, {"owner": 0, "kind": "HI"}, {}, {}, {}, {}, {}, {"owner": 0, "kind": "KA"}, {}],
  [{"owner": 0, "kind": "FU"}, {"owner": 0, "kind": "FU"}, {"owner": 0, "kind": "FU"}, {"owner": 0, "kind": "FU"}, {"owner": 0, "kind": "FU"}, {"owner": 0, "kind": "FU"}, {"owner": 0, "kind": "FU"}, {"owner": 0, "kind": "FU"}, {"owner": 0, "kind": "FU"}]
]


// #boardのelementを取得
var $Board = document.getElementById("board");

// パフォーマンスのためにfragmentを使って1回のDOMアクセスにする

// fragmentをつくる
var fragment = document.createDocumentFragment();

// fragmentに要素を入れていく
board.forEach(function(row, index) {
  row.forEach(function(cell, index) {
    var $element = document.createElement("div");
    $element.classList.add("cell");
    if (!Object.keys(cell).length) {
      fragment.appendChild($element);
      return;
    }
    console.log(cell[""])
    if (cell["owner"] === 0) {
      $element.classList.add("white");
    } else {
      $element.classList.add("black");
    }
    $element.classList.add(cell["kind"]);
    fragment.appendChild($element);
  });
});

// boardの子要素に追加する
$Board.appendChild(fragment);
