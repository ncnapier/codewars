function roundToNext5(n){
  for(i = n; i <= n + 5; i++){
    if(i % 5 === 0){
      return i
    }
  }
}
