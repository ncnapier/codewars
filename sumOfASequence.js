const sequenceSum = (begin, end, step) => {
  let c = 0
  if(end < begin){
    return 0
  }else{
    for(i = begin; i <= end; i += step){
      c +=  i
    }
  }return c
};
