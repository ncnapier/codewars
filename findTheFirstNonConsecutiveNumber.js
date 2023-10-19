function firstNonConsecutive (arr) {
console.log(arr);
  let num = null
  for(let i = 0; i < arr.length; i++){
    if(arr[i] < arr[i +1] -1){
      num += arr[i + 1];
      console.log(num);
      return num;
   }
  }return num;
}
