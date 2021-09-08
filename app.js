document.addEventListener('DOMContentLoaded',()=>{
    //cards options
const cardArray=[
    {
        name:'donut',
        img:'Images/dona.png'
    },
    {
        name:'donut',
        img:'Images/dona.png'
    },
    {
        name:'corazon',
        img:'Images/corazon.png'
    },
    {
        name:'corazon',
        img:'Images/corazon.png'
    },
    {
        name:'unicornio',
        img:'Images/unicornio.png'
    },
    {
        name:'unicornio',
        img:'Images/unicornio.png'
    },
    {
        name:'paleta',
        img:'Images/paleta.png'
    },
    {
        name:'paleta',
        img:'Images/paleta.png'
    },
    {
        name:'varita',
        img:'Images/varita.png'
    },
    {
        name:'varita',
        img:'Images/varita.png'
    },
    {
        name:'musica',
        img:'Images/musica.png'
    },
    {
        name:'musica',
        img:'Images/musica.png'
    }
]

cardArray.sort(()=> 0.5 - Math.random())

const grid=document.querySelector('.grid')
const resultDisplay= document.querySelector('#result')
let cardsChosen=[]
let cardsChosenId= []
let cardsWon = []

//create you board
function createBoard(){
for(let i=0; i<cardArray.length; i++){
    var card =document.createElement('img')
card.setAttribute('src','Images/colision.png')
card.setAttribute('data-id', i)
card.addEventListener('click',flipCard)
grid.appendChild(card)
}
}

//check for matches
function checkForMatch(){
const cards = document.querySelectorAll('img')
const optionOneId = cardsChosenId[0]
const optionTwoId= cardsChosenId[1]

if(optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute('src', 'images/colision.png')
    cards[optionTwoId].setAttribute('src', 'images/colision.png')
  
}else if(cardsChosen [0]=== cardsChosen[1]){
       
        cards[optionOneId].setAttribute('src','Images/blank.png')
        cards[optionTwoId].setAttribute('src', 'Images/blank.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)

}else{
    cards[optionOneId].setAttribute('src', 'Images/colision.png')
    cards[optionTwoId].setAttribute('src','Images/colision.png')
   
}
cardsChosen =[]
cardsChosenId= []
resultDisplay.textContent = cardsWon.length
if(cardsWon.length ===cardArray.length/2){
    resultDisplay.textContent =' Ganaste !!!'
}
}

//flip your card
function flipCard(){
    let cardId= this.getAttribute('data-id')
cardsChosen.push(cardArray[cardId].name)
cardsChosenId.push(cardId)
this.setAttribute('src', cardArray[cardId].img)
if(cardsChosen.length===2){
    setTimeout(checkForMatch,500)
}
}

createBoard()

})