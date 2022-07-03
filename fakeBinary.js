function fakeBin(x){
  let arr = []
for(i = 0; i < x.length; i++){
  if(x[i] < 5){
    arr.push(0)
  }else if(x[i] >= 5){
    arr.push(1)
  }
}return arr.join('')
}
