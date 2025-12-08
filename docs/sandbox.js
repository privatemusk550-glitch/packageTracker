document.addEventListener("DOMContentLoaded", () => {
    const dropMenu = document.getElementById('drop-menu' );
const moblieMenu = document.getElementById('moblie-menu' );
const trackingInput = document.getElementById('tracking-input');
const mainContianer = document.querySelector('#main-container');
const loading = document.getElementById('loading')
const error = document.getElementById('error');
const form = document.querySelector('form')


moblieMenu.addEventListener('click', () => {
    dropMenu.classList.toggle('hidden');
    dropMenu.classList.toggle('block')
//  function replacePage(e){
    
//  }
})
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log(trackingInput)
    if (trackingInput.value === "LX493820715AE") {
        mainContianer.classList.add('hidden')
        loading.classList.add('flex')
        loading.classList.remove('hidden')
      setTimeout(() => {
  window.location.replace("./details.html");
}, 3000);

    }
    else{
        trackingInput.classList.add('border-red-600');
        trackingInput.classList.add('outline-red')
        error.classList.remove('hidden')
        error.classList.add('block')
    }
})
})

