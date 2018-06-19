// ストア
store = new Object();
// 棋譜
// [{"count": int, "owner": string, "kind": string, "from": [int, int], "to": [int, int], "nari": bool}, {...}]
store.kifu = [];
store.addKifu = function(owner, kind, from, to, nari) {
  if (store.kifu.length > 0) {
    var count = store.kifu[store.kifu.length - 1] + 1;
    store.kifu.push({"count": count, "owner": owner, "kind": kind, "from": from, "to": to, "nari": nari});
  } else {
    store.kifu.push({"count": 1, "owner": owner, "kind": kind, "from": from, "to": to, "nari": nari});
  }
};
// 手番 String
store.turn = "white";
store.getTurn = function() {
  return store.turn;
};
store.changeTurn = function() {
  if (store.turn === "white") {
    store.turn = "black";
  } else {
    store.turn = "white";
  }
};

// 選択されている駒 element
store.selectedKoma = null;
store.getSelectedKoma = function() {
  return store.selectedKoma;
};
store.isSelected = function() {
  if (store.selectedKoma) {
    return true;
  } else {
    return false;
  }
};
store.selectKoma = function($Element) {
  store.selectedKoma = $Element;
};
store.unselectKoma = function() {
  store.selectedKoma = null;
};