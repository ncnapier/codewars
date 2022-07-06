function smash(words) {
  let sent = []
  for(i = 0; i < words.length; i++){
    if(i < words.length - 1){
      sent.push(words[i]+ ' ')
    }else{
      sent.push(words[i])
    }
  }console.log(sent)
  return sent.join("")
}
