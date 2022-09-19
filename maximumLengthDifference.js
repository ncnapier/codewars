function mxdiflg(a1, a2) {
  let aOne = []
  let aTwo = []
  console.log(a1, a2)
    if (a1 === null || a2 === null || a1.length  === 0 || a2.length === 0){
      return -1
    }else{
      for(i = 0; i < a1.length; i++){
        aOne.push(a1[i].length)
        
      }
      for(i = 0; i < a2.length; i++){
        aTwo.push(a2[i].length)
      }
      let a = (Math.abs(Math.max(...aOne) - Math.min(...aTwo)))
      let b = (Math.abs(Math.min(...aOne) - Math.max(...aTwo)))
      return Math.max(a, b)
    }
