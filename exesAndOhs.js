function XO(str) {
   let x = []
   let o = []
   for(i = 0; i < str.length; i++){
      if(str[i] === 'o' || str[i] === 'O'){
        x.push(str[i])
      }else if(str[i] === 'x' || str[i] === 'X'){
        o.push(str[i])
      }
   }return x.length === o.length
}
