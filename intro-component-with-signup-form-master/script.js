const form=document.getElementById("form");

const fname=document.getElementById("fname");
const lname=document.getElementById("lname");
const email=document.getElementById("email");
const password=document.getElementById("password");

const errorF=document.getElementById("errorF");
const errorL=document.getElementById("errorL");
const errorE=document.getElementById("errorE");
const errorP=document.getElementById("errorP");

const image=document.createElement("img");
image.src="images/icon-error.svg"


var signF=0, signL=0, signE=0, signP=0;

function validText(text){
  if(text==""){
    return false;
  }
  else{
    return true;
  }
};


function validEmail(mail){
  var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(mail.match(pattern)){
    return true;
  }
  else{
    false;
  }
};


form.addEventListener('submit', (e)=>{
  if(validText(fname.value) && validText(lname.value) && validText(password.value) && validEmail(email.value)){
    console.log("yup");
  }
  else{
    e.preventDefault();
    if(validText(fname.value)){
        console.log("Valid First Name");
    }else{
      errorF.innerHTML="First Name cannot be empty.";
      fname.style.border="2px solid red";
      if(signF===0){
        fname.style.background="url(images/icon-error.svg) no-repeat right 10px top 16px";
        signF++;
      }
    }
    if(validText(lname.value)){
        console.log("Valid Last Name");
    }else{
      errorL.innerHTML="Last Name cannot be empty.";
      lname.style.border="2px solid red";
      if(signL===0){
        lname.style.background="url(images/icon-error.svg) no-repeat right 10px top 16px";
        signL++;
      }
    }
    if(validEmail(email.value)){
        console.log("Valid Email");
    }else{
      email.style.border="2px solid red";
      if(email.value==""){
        errorE.innerHTML="Email Address cannot be empty.";
      }
      else{
        errorE.innerHTML="Invalid Email Address.";
      }
      if(signE===0){
        email.style.background="url(images/icon-error.svg) no-repeat right 10px top 16px";
        signE++;
      }
    }
    if(validText(password.value)){
        console.log("Valid First Name");
    }else{
      errorP.innerHTML="Password cannot be empty.";
      password.style.border="2px solid red";
      if(signP===0){
        password.style.background="url(images/icon-error.svg) no-repeat right 10px top 16px";
        signP++;
      }
    }
  }
})