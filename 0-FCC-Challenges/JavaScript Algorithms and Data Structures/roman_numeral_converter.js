function getRomanDigit(digit){
  const romanCipher = {
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    20: "XX",
    30: "XXX",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    200: "CC",
    300: "CCC",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
    2000: "MM",
    3000: "MMM"
  }

  return romanCipher[digit]

}

function convertToRoman(num) {
  const dividers = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  let romanStr = "";

  for(let i = dividers.length - 1; i >= 0; i--){
    let numToGet;
    while(num>=dividers[i] && num > 0){
      numToGet = num - num%dividers[i];
      num = num%dividers[i];
      romanStr += getRomanDigit(numToGet);
    }
  }
  console.log(romanStr)
  return romanStr;
}

convertToRoman(3999);