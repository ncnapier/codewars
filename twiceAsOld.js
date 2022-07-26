function twiceAsOld(dadYearsOld, sonYearsOld) {
  for(i = -200; i < 200; i++){
    if(dadYearsOld + i === (sonYearsOld + i) * 2){
      return Math.abs(i)
    }
}
}
