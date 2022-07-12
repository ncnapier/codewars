function alphabetPosition(text) {
  let str = 'abcdefghijklmnopqrstuvwxyz'
  let arr = str.split('')
  console.log(text)
  let answer = []
  for(i = 0; i < text.length; i++){
    if(arr.indexOf(text.toLowerCase().split('')[i]) + 1 > 0){
      answer.push(arr.indexOf(text.toLowerCase().split('')[i]) + 1)
      }
  }return answer.join(' ')
}
