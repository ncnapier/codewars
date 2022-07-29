function find_average(array) {
  return array.length > 0 ? (array.reduce((c, acc)=> c + acc,0)) / array.length : 0
}
