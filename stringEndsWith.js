let solution = (str, ending) => str.split('').reverse().splice(0, ending.length).join('') === ending.split('').reverse().join('') ? true : false 
