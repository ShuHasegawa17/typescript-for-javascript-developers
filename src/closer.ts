export {};

let uniqueInteger = (() => {
  let counter = 0;
  return function () {
    return counter++;
  };
})();
console.log(uniqueInteger());
console.log(uniqueInteger());

let scope = 'global scope';
function checkScope() {
  let scope = 'local scope';
  function f() {
    return scope;
  }
  return f;
}
console.log(checkScope()()); // local scope

function counter() {
  let n = 0;
  return {
    count: function () {
      return n++;
    },
    reset: function () {
      n = 0;
    },
  };
}

// 親関数.小関数のアクセス→クラスインスタンスのような感じ
let c = counter();
let d = counter();
console.log(c.count());
console.log(d.count());
c.reset();
console.log(c.count());
console.log(d.count());
