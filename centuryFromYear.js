function century(year) {
  let cent = 0
  if(year < 100){
    cent = 1
    }else{
  let last2 = year.toString().slice(-2)
  let last2Num = Number(last2)
  
  if(last2Num > 0){
    cent = Math.floor(year*0.01 + 1)
  }else{
    cent = Math.floor(year*0.01)
  }
      }
  return cent
}
