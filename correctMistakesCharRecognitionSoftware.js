function correct(string)
{
  let strings = string.split('')
	for(let i = 0; i < strings.length; i++){
    if(strings[i] == 5){
      strings.splice[i];
      strings[i] = "S"
    }else if(strings[i] == 0){
      strings.splice[i];
      strings[i] = "O"
    }else if(strings[i] == 1){
      strings.splice[i];
      strings[i] = "I"
    }
  }return strings.join('');
}
