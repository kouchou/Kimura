// ストア
var store = {
  board_: null,
  hands_: {
    "white": {"HI": 0, "KA": 0, "KI": 0, "GI": 0, "KE": 0, "KY": 0, "FU": 0},
    "black": {"HI": 0, "KA": 0, "KI": 0, "GI": 0, "KE": 0, "KY": 0, "FU": 0}
  },
  turn_: "white",
  selectedItem_: null,
  kifu_: []
};
// 盤面
store.getBoard = function() {
  return store.board_;
};
store.setBoard = function(board) {
  store.board_ = board
};

// 持ち駒
store.getHands = function(owner) {
  return store.hands_[owner];
};
store.addHands = function(owner, kind) {
  store.hands_[owner][kind]++;
};
store.removeHands = function(owner, kind) {
  store.hands_[owner][kind]--;
}

// 手番 String
store.getTurn = function() {
  return store.turn_;
};
store.setTurn = function(owner) {
  store.turn_ = owner;
}

// 選択されている駒 element
store.getSelectedItem = function() {
  return store.selectedItem_;
};
store.setSelectedItem = function($Element) {
  store.selectedItem_ = $Element;
};

// 棋譜
store.getKifu = function() {
  return store.kifu_;
};
store.addKifu = function(owner, kind, from, to, nari) {
    store.kifu_.push({"owner": owner, "kind": kind, "from": from, "to": to, "nari": nari});
};