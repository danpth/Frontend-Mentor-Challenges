function telephoneCheck(str) {

  const validRegex = /^(1\s?)?(\d{3}|\(\d{3}\))[\s.-]?\d{3}[\s.-]?\d{4}$/;

  return validRegex.test(str);
}

console.log(telephoneCheck("1(555)555-5555"));
console.log(telephoneCheck("1 (555) 123"));