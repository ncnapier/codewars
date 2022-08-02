function DNAStrand(dna){
  let y = []
  let x = dna.split('')
  for(i = 0; i < x.length; i++){
    if(x[i] === "A"){
      y.push("T")
    }else if(x[i] === "G"){
      y.push("C")
    }else if(x[i] === "T"){
      y.push("A")
    }else if(x[i] === "C"){
      y.push("G")
    }
  }return y.join('')
}
