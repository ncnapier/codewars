function checkExam(array1, array2) {
  let x = 0;
 for(let i = 0; i < array1.length; i++){
  
   if (array2[i] === ""){
     x += 0;
   }else if(array1[i] !== array2[i]){
     x -=1;
   }else{
     x += 4;
   }
 }
  if (x >= 0){
    return x;
  }else{
    return 0;
  }
}
