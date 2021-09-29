const email=document.getElementById('email');
const errorMessage=document.getElementById('error');
var signAdded=0;

function validEmail(mail){
  var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   if(mail.match(emailPattern)){
     return true;
   }else{
     return false;
   }
}

form.addEventListener('submit', (e)=>{
  if(validEmail(email.value)){
    console.log("Yup");
  }else{
    e.preventDefault();
    errorMessage.innerHTML="Please provide a valide email";
    if(signAdded===0){
    var image=document.createElement("img");
    image.src='images/icon-error.svg';
    document.getElementById('errorSign').appendChild(image);
    signAdded++;
    }
    
    document.getElementsByTagName("input[type=text]").style.border = "border: 4px solid hsl(0, 93%, 68%)";
  }
})