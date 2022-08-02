function bouncingBall(h,  bounce,  window) {
  if(bounce === 1 || bounce === -1){
    return -1
  }else{
  let i = 0
  while (h > window){
    h *= bounce
    i++
  console.log(h)
  console.log(i)
    }return  (i * 2) + 1 -2 
}
  }
