var capitals = function (word) {
  let list =[]
  word = word.split('')
	for(i = 0; i < word.length; i++){
    if (word[i] !== word[i].toLowerCase()){
      list.push(i)
    }
  }return list
};
