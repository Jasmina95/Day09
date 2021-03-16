// Only change code below this line
function myForLoop1() {
  var evenNumbers = "";
  for (var i = 0; i < 5; i++) {
    if (i === 4) {
      evenNumbers += 2 * i;
    } else {
      evenNumbers += 2 * i + ", ";
    }
  }
  return evenNumbers;
}
function myForLoop2() {
  var evenInverseNumbers = "";
  for (var i = 4; i >= 0; i--) {
    if (i === 0) {
      evenInverseNumbers += 2 * i;
    } else {
      evenInverseNumbers += 2 * i + ", ";
    }
  }
  return evenInverseNumbers;
}

console.log(myForLoop1());
console.log(myForLoop2());
// Only change code above this line
module.exports = {
  myForLoop1,
  myForLoop2
};
