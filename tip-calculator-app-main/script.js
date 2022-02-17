const bill=document.getElementById("bill");
const people=document.getElementById("people");
const tip=document.getElementById("amountTip");
const total=document.getElementById("amountTotal");
const reset=document.getElementById("reset");

bill.addEventListener('input', updateValue);
people.addEventListener('input', updateValue);
reset.addEventListener('click', resetValues);


function updateValue(e) {
  console.log("ciao");
  if(people.value.lenght<1){
    people.value=1;
  }  
  total.innerHTML=`$${((bill.value)/people.value).toFixed(2)}`;
}

function resetValues(f){
  console.log("ciao");
  bill.value=0;
  people.value=1;
  total.innerHTML="$0.00";
}

function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}