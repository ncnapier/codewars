function DNAtoRNA(dna) {
  let rna = []
  for(i = 0; i < dna.length; i++){
    if(dna[i] !== "T"){
      rna.push(dna[i])
    }else if(dna[i] === "T"){
      rna.push("U")
    }
  }console.log(rna)
  return rna.join('')
}
