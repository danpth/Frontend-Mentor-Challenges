const btns = document.querySelectorAll('.tip-btn-normal');
const bill = document.getElementById('bill-input');
const people = document.getElementById('people-input');
const totalTip = document.getElementById('tip-total');
const total = document.getElementById('total');
const reset = document.querySelector('.reset-btn');
const customBtnInit = document.getElementById('custom');
const customBtn = customBtnInit.children[0];

let currentPercent = 5;
let billValue = 0;
let peopleNumber = 1;
let totalTipValue = 0;
let totalValue = 0;
let customValue = 1;

function tipBtnClick (){
  for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener('click', function() {
      
      //let currentBtn = document.querySelector('.active-btn');
      //currentBtn.className = currentBtn.className.replace('active-btn', '');
      for (let j = 0; j < btns.length; j++){
        if(btns[j].classList.contains('active-btn')){
          btns[j].className = btns[j].className.replace('active-btn', '');
        }
      }
      this.className += (' active-btn');
      currentPercent = Number(this.id);
      customBtn.value = '';
      calculate();
    });
    
  }
  
}



bill.onkeyup = function(){
  if(bill.value < 100000){
    billValue = Number(bill.value);
  }
  
  calculate();


}

bill.addEventListener('focusout', function(){
  bill.value = billValue.toFixed(2);
  
});

people.onkeyup = function(){
  if(/^[0-9]*$/g.test(people.value) && people.value < 999){
    peopleNumber = Number(people.value).toFixed();
  }
  if(people.value ===''){
    people.value = '';
  }else{
    people.value = peopleNumber;
  }
  



  calculate();

}

const customBtnOnKeyUp = customBtn.addEventListener('keyup',function(){
  
  //Deactivate normal buttons
  for(let i = 0; i < btns.length; i++){
    if(btns[i].classList.contains('active-btn')){
      btns[i].className = btns[i].className.replace('active-btn', '')
    }
  }
  customValue = customBtn.value;

  if(customValue === ''){
    currentPercent = 5;
    document.getElementById('5').className += ('active-btn');
  }else{
    currentPercent = Number(customValue);
  }
  
  if(currentPercent>100){
    currentPercent = 100;
    customValue = 100;
  }
  customBtn.value = customValue;
  calculate();
  console.log(customValue);
})


reset.onclick = function (){
  bill.value = '';
  billValue = 0;
  people.value = '';
  peopleNumber = 0;
  customValue = 1;
  customBtn.value = '';
  totalTip.innerHTML = '$0.00';
  total.innerHTML = '$0.00';
  //let currentBtn = document.querySelector('.active-btn');
  //currentBtn.className = currentBtn.className.replace('active-btn', ' ');
  for (let j = 0; j < btns.length; j++){
    if(btns[j].classList.contains('active-btn')){
      btns[j].className = btns[j].className.replace('active-btn', '');
    }
  }
  document.getElementById('5').className += ('active-btn');
  currentPercent = 5;
}


function calculate(){
  if(peopleNumber == '' || peopleNumber == 0){
    peopleNumber = 1;
  }
  totalTipValue = Number(billValue * currentPercent / (peopleNumber * 100));
  totalTip.innerHTML = "$" + totalTipValue.toFixed(2);
  console.log(totalTipValue)
  console.log(billValue)
  console.log(peopleNumber)
  console.log('-----------')
  totalValue = ((Number(billValue)/Number(peopleNumber)) + Number(totalTipValue));

  total.innerHTML = "$" + totalValue.toFixed(2);

}

tipBtnClick();
