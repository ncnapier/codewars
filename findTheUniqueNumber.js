function findUniq(arr) {
  let newArr = arr.sort()
  let finalArr = []
  for(i = 0; i < newArr.length; i++){
    if(newArr[i] !== newArr[i + 1] && newArr[i] !== newArr[i - 1]){
      finalArr.push(newArr[i])
    }
  }return Number(finalArr.join(''))
}
