Function.prototype.customApply = function (context = {}, args = []) {
  if (typeof this !== "function") throw new Error(`${this} is not a function`);
  if (!Array.isArray(args)) throw new Error("Called on non-object");

  context.fn = this;
  context.fn(...args);
}

const obj = {
  car: "Toyota"
}

function purchase(price, year) {
  console.log(`I bought ${this.car} for ${price} in ${year}`);
}

purchase.customApply(obj, ["30L", 2022]);