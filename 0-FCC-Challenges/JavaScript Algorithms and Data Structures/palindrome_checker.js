function palindrome(str) {
  let newStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  for(let i=0, j=newStr.length-1; i<j; i++, j--){
    if(newStr[i] != newStr[j]){
      return false
    }
  }
  return true;
}

console.log(palindrome("radar"));