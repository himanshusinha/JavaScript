function naturalnumber(n) {
  let num = 4;
  for (let i = 1; i <= n; i++) {
    num = num + i;
  }
  return num;
}
console.log(naturalnumber(5));
