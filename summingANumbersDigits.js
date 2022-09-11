function sumDigits(number) {
  console.log(number)
  let count = 0
  number = Math.abs(number).toString().split('')
  for(i = 0; i < number.length; i++){
    count += Number(number[i])
  }
  return count
}
