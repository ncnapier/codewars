

// function isSquare(n){
//   let newVar = 0
//   if( Math.sign(n) === -1 || Math.sign(n) == NaN){
//     return false
//   }else{
//   for(i = 0; i <= n; i++){
//     if(i * i == n){
//       newVar += 1
//     }else{
//       newVar += 0
//     }
//   }
// }
//   if(Math.sign(newVar) == 1){
//     return true
//   }else{
//     return false
//   }
//   }

function isSquare(n) {
  return Math.sqrt(n) % 1 === 0
}
