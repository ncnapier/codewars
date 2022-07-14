function findEvenIndex(arr)
{
  let arr2 = -1
  for(i = 0; i < arr.length + 1; i++){
    if((arr.slice(0,i).reduce((acc,c)=> acc + c, 0)) === (arr.slice(i+1,arr.length).reduce((acc,c)=> acc + c, 0))){
      console.log(i)
      arr2 += (i) + 1
    }
    
  }return arr2
  }
