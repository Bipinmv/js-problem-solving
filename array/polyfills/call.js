Function.prototype.customCall = function (context = {}, ...args) {
  if (typeof this !== "function") throw new Error(`${this} is not a function`);

  context.fn = this;
  context.fn(...args);
}

const obj = {
  car: "Toyota"
}

function purchase(price) {
  console.log(`I bought ${this.car} for ${price}`);
}

purchase.customCall(obj, "30L");