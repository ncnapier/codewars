function longest(s1, s2) {
  let join1 = s1.concat(s2); 
  let alphJoin = function(join1){
    return join1.split('').sort()
  }
let joinAlph = alphJoin(join1)
let uniqJoinAlph = new Set(joinAlph)
let uniqJoinAlphArr = Array.from(uniqJoinAlph)
let uniqJoinAlphStr = uniqJoinAlphArr.join('')
return uniqJoinAlphStr  
}
