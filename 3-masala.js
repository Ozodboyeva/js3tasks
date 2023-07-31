let a = 3;
let b = -6;
let c = 5;
let positiveCount = 0;
let negativeCount = 0;

if (a > 0) {
  positiveCount++;
} else if (a < 0) {
  negativeCount++;
}

if (b > 0) {
  positiveCount++;
} else if (b < 0) {
  negativeCount++;
}

if (c > 0) {
  positiveCount++;
} else if (c < 0) {
  negativeCount++;
}

console.log(positiveCount);
console.log(negativeCount);
