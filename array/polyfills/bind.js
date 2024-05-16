Function.prototype.customBind = function (context = {}, ...args) {
  if (typeof this !== "function") throw new Error(`${this} is not a function`);

  context.fn = this;
  return function (...newArgs) {
    return context.fn(...args, ...newArgs)
  }
}

const obj = {
  car: "Toyota"
}

function purchase(price) {
  console.log(`I bought ${this.car} for ${price}`);
}

const bindFn = purchase.customBind(obj);
console.log(bindFn("30L"));
