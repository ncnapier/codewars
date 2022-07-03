function friend(friends){
  let arr = friends.filter(name => typeof name === 'string').filter(name => name.length == 4).filter(name => Number(name) != name)
return arr
  }
