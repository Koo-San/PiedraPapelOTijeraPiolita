const userChoiceDisplay = document.getElementById('userChoiceDisplay')
const compterChoiceDisplay = document.getElementById('computerChoiceDisplay')
const possibleChoices = document.querySelectorAll('button')

const Piedra = document.getElementById('piedra');
const Papel = document.getElementById('papel');
const Tijera = document.getElementById('tijera');

let userChoice
let computerChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    
    
    
    generateComputerChoice()
}))

piedra.addEventListener('click', function onClick(){
    piedra.style.backgroundColor = 'salmon'
    piedra.style.border = 'none'
    setTimeout(() => {
        piedra.style.backgroundColor = '#FFE156'
    }, "100");

    
})

papel.addEventListener('click', function onClick(){
    papel.style.backgroundColor = 'salmon'
    papel.style.border = 'none'
    setTimeout(() => {
        papel.style.backgroundColor = '#FFE156'
    }, "100");
})

tijera.addEventListener('click', function onClick() {
    tijera.style.backgroundColor = 'salmon'
    tijera.style.border = 'none'
    setTimeout(() => {
        tijera.style.backgroundColor = '#FFE156'
    }, "100");
})




function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 4)
    
    if (randomNumber === 1){
        computerChoice = 'piedra'
    }

    if (randomNumber === 2){
        computerChoice = 'tijera'
    }

    if (randomNumber === 3){
        computerChoice = 'papel'
    }

    computerChoiceDisplay.innerHTML = computerChoice
}