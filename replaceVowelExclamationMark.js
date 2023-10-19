function replace(s){
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
   s = s.split('');
  for(let i = 0; i < s.length; i++){
    for(let y = 0; y < vowels.length; y++){
      if(s[i] == vowels[y]){
        s[i] = '!';
      }
    }
  } return(s.join(''))
}
