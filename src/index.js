const buttonAnswer = document.querySelector('.btn-answer')
const hiddenAnswer = document.querySelector('.hidden')
const bookmarkColor = document.querySelector('.bookmark__symbol')
const Colornew = document.querySelector('.bookmark__symbol')

console.log(Colornew)

buttonAnswer.addEventListener('click', () => hiddenAnswer.classList.toggle('hidden'))
bookmarkColor.addEventListener('click',() => Colornew.classList.toggle('lufthansa'))    