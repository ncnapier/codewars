function strCount(str, letter){  
  let x = 0
  for(i = 0; i < str.split('').length; i++){
    if(str.split('')[i] === letter){
      x++
    }
  }return x
}
