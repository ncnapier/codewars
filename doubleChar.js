function doubleChar(str) {
  str = str.split('').map(x => x + x).join('')
  return str
}
