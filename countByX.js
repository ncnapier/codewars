function countBy(x, n) {
  let z = [];
for(i = x; z.length < n; i += x){
  z.push(i)
}
  return z;
}
