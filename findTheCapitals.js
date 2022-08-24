var capitals = function (word) {
  let ans = []
  word = word.split('')
	for(i = 0; i < word.length; i++){
    if(word[i] !==  word[i].toLowerCase()){
      ans.push(i)
    }
  }return ans
};
