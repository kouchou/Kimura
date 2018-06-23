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
];

// 初期配置をステータスへ
Store.setBoard(initPosition);

// 初期配置を生成
Koma.create(Store.getBoard());
