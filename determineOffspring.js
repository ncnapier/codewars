function chromosomeCheck(sperm) {
  if(sperm.split('')[0] != sperm.split('')[1]){
    return "Congratulations! You're going to have a son.";
  }else{
    return "Congratulations! You're going to have a daughter.";
  }
}
