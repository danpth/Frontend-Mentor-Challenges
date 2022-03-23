const btns = document.querySelectorAll('.tasto');
const sections = document.querySelectorAll('.sec');
const page = document.querySelector('.page');


function switchPages(){
  for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener('click', function(){
      let currentBtn = document.querySelectorAll('.tasto-act');
      currentBtn[0].className = currentBtn[0].className.replace('tasto-act', '');
      this.className += ' tasto-act';
    });
  }

  page.addEventListener('click', (e) => {
    let id = e.target.dataset.id;
    if(id){
      sections.forEach((section)=>{
        section.classList.remove('active');
      })
      const element = document.getElementById(id);
      element.classList.add('active');
    }
  })

  const themeBtn = document.querySelector('.theme-btn');
  themeBtn.addEventListener('click',() =>{
    let element = document.body;
    element.classList.toggle('light-mode');
  });
  
}


switchPages();
