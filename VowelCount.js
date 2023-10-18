function getCount(str) {
  let arr = str.split('');
  let count = 0;
  for(let i = 0; i < arr.length; i++){
    if (arr[i] == 'a' || arr[i] == 'e' || arr[i] == 'i' || arr[i] == 'o' || arr[i] == 'u'){
      count++
    }
  }return count;
}
