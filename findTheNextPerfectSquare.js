function findNextSquare(sq) {
  if(Number.isInteger(Math.sqrt(sq))){
  for(i = sq + 1; i < 5000000000000000000000000000000000000000000000000; i++){
    if(Number.isInteger(Math.sqrt(i))){
       return i}
       }
}else{
  return -1}
}
