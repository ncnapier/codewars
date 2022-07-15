function countPositivesSumNegatives(input) {
  let posCount = 0
  let negCount = 0
  for(i = 0; i < input.length; i++){
    if(input[i] > 0){
      posCount += 1
    }else if(input[i] < 0){
      negCount += input[i]
    }
  }let arr = [posCount, negCount]
  return arr
}
