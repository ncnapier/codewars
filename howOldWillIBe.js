function  calculateAge(x, y) { 
if((x < y) && (y - x > 1)) {
  return "You are " + (y - x) + " years old.";
}else if ((x < y) && (y - x == 1)) {
  return "You are 1 year old."
}else if (x > y && x- y > 1) {
  return "You will be born in " + (x - y)+ " years.";
}else if (x == y){
  return "You were born this very year!";
}else{
  return "You will be born in 1 year.";
}
};
