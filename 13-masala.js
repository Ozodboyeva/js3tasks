a = 5;
b = 8;
c = 11;

if (a < b && b < c) {
  a *= 2;
  b *= 2;
  c *= 2;
} else {
  a *= -1;
  b *= -1;
  c *= -1;
}

console.log("A:", a);
console.log("B:", b);
console.log("C:", c);
