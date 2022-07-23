function getGrade (s1, s2, s3) {
  let fg = (s1 + s2 + s3) / 3
  if(fg >= 90){
    return 'A'
  }else if(fg >= 80){
    return 'B'
  }else if(fg >=70){
    return 'C'
  }else if(fg >= 60){
    return 'D'
  }else{
    return 'F'
  }
}
