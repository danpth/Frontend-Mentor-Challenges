const btns = document.querySelectorAll('.tip-btn-normal');
const bill = document.getElementById('bill-input');
const people = document.getElementById('people-input');
const totalTip = document.getElementById('tip-total');
const total = document.getElementById('total');
const reset = document.querySelector('.reset-btn');

let currentPercent = 5;
let billValue = 0;
let peopleNumber = 1;
let totalTipValue = 0;
let totalValue = 0;


function tipBtnClick (){
  for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener('click', function() {
      
      let currentBtn = document.querySelector('.active-btn');
      currentBtn.className = currentBtn.className.replace('active-btn', '');
      this.className += (' active-btn');
      currentPercent = Number(this.id);
      calculate();
    });
    
  }
  
}



bill.onkeyup = function(){
  if(bill.value < 10000){
    billValue = Number(bill.value);
  }
  
  calculate();


}

bill.addEventListener('focusout', function(){
  bill.value = billValue.toFixed(2);
  
});

people.onkeyup = function(){
  if(/^[0-9]*$/g.test(people.value) && people.value < 1000){
    peopleNumber = Number(people.value);
  }
  if(people.value.length < 0){
    peopleNumber = 1;
  }
  people.value = peopleNumber;

  calculate();

}

/*function custom(){
  console.log('hi');
  let currentBtn = document.querySelector('.active-btn');
  currentBtn.className = currentBtn.className.replace('active-btn', ' ');
}*/

reset.onclick = function (){
  bill.value = '';
  billValue = 0;
  people.value = '';
  peopleNumber = 0;
  totalTip.innerHTML = '$0.00';
  total.innerHTML = '$0.00';
  let currentBtn = document.querySelector('.active-btn');
  currentBtn.className = currentBtn.className.replace('active-btn', ' ');
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
