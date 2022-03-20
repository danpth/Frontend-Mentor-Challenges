function key(letter){

  const chiper = {
    "A": "N",
    "B": "O",
    "C": "P",
    "D": "Q",
    "E": "R",
    "F": "S",
    "G": "T",
    "H": "U",
    "I": "V",
    "J": "W",
    "K": "X",
    "L": "Y",
    "M": "Z",
    "N": "A",
    "O": "B",
    "P": "C",
    "Q": "D",
    "R": "E",
    "S": "F",
    "T": "G",
    "U": "H",
    "V": "I",
    "W": "J",
    "X": "K",
    "Y": "L",
    "Z": "M"
  }

return chiper[letter];

}

function rot13(str) {
  let newStr = "";
  for(let i = 0; i<str.length; i++){
    if(str[i]>="A" && str[i]<="Z"){
      newStr += key(str[i]);
    }else{
      newStr += str[i];
    }

  }
  console.log(newStr);

  return newStr;
}

rot13("SERR PBQR PNZC");