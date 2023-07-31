yil = 2002;

if (yil % 4 == 0 || yil % 100 == 0 || yil % 400 == 0) {
  console.log(366);
} else {
  console.log(355);
}
