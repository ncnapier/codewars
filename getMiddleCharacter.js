function getMiddle(s)
{
  if(s.split('').length % 2){
    return s.split('')[Math.ceil(s.split('').length / 2) - 1];
  }else{
    return s.split('')[Math.ceil(s.split('').length / 2) - 1] + s.split('')[Math.ceil(s.split('').length / 2)];
  }
}
