function sumArray(array) {
  if(array == null || array.length < 3){
    return 0
  }else{
    array =array.sort((a, b) => a - b)
    array.pop()
    array.shift()
    return array.reduce((x, c) => x + c,0) 
  }
}
