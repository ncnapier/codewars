function printerError(s) {
    let error = 0;
    let bad = ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  for(let i = 0; i < s.length; i++){
    for(let y = 0; y < bad.length; y++){
      if(s[i] == bad[y]){
        error++;
      }
    }
  }return error + "/" + s.length;
}
