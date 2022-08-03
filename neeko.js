const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
  modal_container.classList.add('show');
  
    
 modal_container.addEventListener('click', (event) =>{ 
   if(event.target == modal_container){      modal_container.classList.remove('show')     
   }
 })
})

close.addEventListener('click', () => {
  modal_container.classList.remove('show');  
})

