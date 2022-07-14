function grow(x){
 return x.sort((a, b) => a - b).reduce((acc, c) => acc * c)
}
