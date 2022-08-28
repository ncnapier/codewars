function digPow(n, p){
  let num = 0
let arr = n.toString().split('')
console.log(arr)
  for(i = 0; i < arr.length; i++){
    num += Math.pow(arr[i], i+p)
  }console.log(num)
  if(num % n === 0){
    return num / n
  }else{
    return -1
  }
}
