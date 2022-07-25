function isIsogram(str){
  let doubles = []
  const strSort =  str.toLowerCase().split('').sort()
   for(i = 0; i < strSort.length; i++){
     if(strSort[i] === strSort[i + 1] || strSort[i] === strSort[i - 1]){
       doubles.push(strSort[i])
     }
}if(doubles.length > 0){
     return false
   }else{
     return true
   }
 }
