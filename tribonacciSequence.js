function tribonacci(signature,n){
  
  for( i = 0; i < n; i ++){
  signature[3+i] = signature[0+i]+signature[1+i]+signature[2+i]
    }console.log(signature)
  return signature.splice(0, n)
}
