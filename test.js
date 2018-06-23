var Test = function(hikisu) {
  this.hikisu = hikisu;
  this.kind = "test";
};

Test.prototype.getHikisu = function() {
  return this.hikisu;
};

Test.prototype.getKind = function() {
  return this.kind;
}

Test.prototype.getYes = function() {
  return "Yes";
};

Test.getKind = function() {
  return this.kind;
};

Test.sayHello = function() {
  console.log("Hello!!");
};

Test.getHello = function() {
  return "Hello";
};

var yamada = new Test("yamada");