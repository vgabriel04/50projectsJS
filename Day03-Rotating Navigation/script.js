const btnOpen = document.querySelector('#open')
const btnClose = document.querySelector('#close')
const divContainer = document.querySelector('.container')

// function open(){
//     divContainer.classList.add('show-nav')
// }

// function close(){
//     divContainer.classList.remove('show-nav')
// }

btnOpen.addEventListener('click', () => divContainer.classList.add('show-nav'))
btnClose.addEventListener('click', () => divContainer.classList.remove('show-nav'))