// Only change code below this line
function logicOrder(num) {
  if (num >= 100) {
    return "Greater than or equal to 100";
  } else if (num < 50) {
    return "Less than 50";
  } else {
    return "Less than 100";
  }
}

console.log(logicOrder(28));
console.log(logicOrder(60));
console.log(logicOrder(110));
// Only change code above this line
module.exports = logicOrder;
