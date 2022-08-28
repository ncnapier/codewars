function betterThanAverage(classPoints, yourPoints) {
  let sum = 0
  for(i = 0; i < classPoints.length; i++){
    sum += classPoints[i]
  }console.log(sum/classPoints.length)
  return yourPoints > sum/classPoints.length
}
