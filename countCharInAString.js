function count(string) {
  let counter = {};
  string.split('').forEach(ele => {
    if(counter[ele]){
      counter[ele] +=1;
    }else{
      counter[ele] = 1;
    }
  })
  return counter;
}
