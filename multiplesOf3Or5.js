function solution(number){
  let arr = []
  for(i = 0; i < number; i++){
    if(i % 3 === 0 && i % 5 === 0){
      arr.push(i)
      }else if( i % 3 === 0){
        arr.push(i)
      }else if(i % 5 === 0){
        arr.push(i)
      }
    }return arr.reduce((c, acc)=> c + acc,0)
  }
  
