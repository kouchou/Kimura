// ----------------------------------------------------------------
// Store Object
// ----------------------------------------------------------------
// Status (Private variables)
// ----------------------------------------------------------------
var Store = {
  board_: [
    [{"owner": "black", "kind": "KY"}, {"owner": "black", "kind": "KE"}, {"owner": "black", "kind": "GI"}, {"owner": "black", "kind": "KI"}, {"owner": "black", "kind": "OU"}, {"owner": "black", "kind": "KI"}, {"owner": "black", "kind": "GI"}, {"owner": "black", "kind": "KE"}, {"owner": "black", "kind": "KY"}],
    [{}, {"owner": "black", "kind": "HI"}, {}, {}, {}, {}, {}, {"owner": "black", "kind": "KA"}, {}],
    [{"owner": "black", "kind": "FU"}, {"owner": "black", "kind": "FU"}, {"owner": "black", "kind": "FU"}, {"owner": "black", "kind": "FU"}, {"owner": "black", "kind": "FU"}, {"owner": "black", "kind": "FU"}, {"owner": "black", "kind": "FU"}, {"owner": "black", "kind": "FU"}, {"owner": "black", "kind": "FU"}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{"owner": "white", "kind": "FU"}, {"owner": "white", "kind": "FU"}, {"owner": "white", "kind": "FU"}, {"owner": "white", "kind": "FU"}, {"owner": "white", "kind": "FU"}, {"owner": "white", "kind": "FU"}, {"owner": "white", "kind": "FU"}, {"owner": "white", "kind": "FU"}, {"owner": "white", "kind": "FU"}],
    [{}, {"owner": "white", "kind": "KA"}, {}, {}, {}, {}, {}, {"owner": "white", "kind": "HI"}, {}],
    [{"owner": "white", "kind": "KY"}, {"owner": "white", "kind": "KE"}, {"owner": "white", "kind": "GI"}, {"owner": "white", "kind": "KI"}, {"owner": "white", "kind": "GY"}, {"owner": "white", "kind": "KI"}, {"owner": "white", "kind": "GI"}, {"owner": "white", "kind": "KE"}, {"owner": "white", "kind": "KY"}]
  ],
  hands_: {
    "white": {"HI": 0, "KA": 0, "KI": 0, "GI": 0, "KE": 0, "KY": 0, "FU": 0},
    "black": {"HI": 0, "KA": 0, "KI": 0, "GI": 0, "KE": 0, "KY": 0, "FU": 0}
  },
  turn_: "white",
  selectedItem_: null,
  kifu_: []
};

// Public Functions
// ----------------------------------------------------------------
// 盤面
Store.getBoard = function() {
  return Store.board_;
};
Store.setBoard = function(board) {
  Store.board_ = board
};

// 持ち駒
Store.getHands = function(owner) {
  return Store.hands_[owner];
};
Store.addHands = function(owner, kind) {
  Store.hands_[owner][kind]++;
};
Store.removeHands = function(owner, kind) {
  Store.hands_[owner][kind]--;
}

// 手番 String
Store.getTurn = function() {
  return Store.turn_;
};
Store.setTurn = function(owner) {
  Store.turn_ = owner;
}

// 選択されている駒 element
Store.getSelectedItem = function() {
  return Store.selectedItem_;
};
Store.setSelectedItem = function(item) {
  Store.selectedItem_ = item;
};

// 棋譜
Store.getKifu = function() {
  return Store.kifu_;
};
Store.addKifu = function(owner, kind, from, to, nari) {
    Store.kifu_.push({"owner": owner, "kind": kind, "from": from, "to": to, "nari": nari});
};