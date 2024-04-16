const cardsArray = [
    {
        name : 'butterfly',
        img : 'chosen/butterfly.jpg'
    },
    {
        name : 'upper3',
        img : 'chosen/upper3.jpg'
    },
    {
        name : 'hashira1',
        img : 'chosen/hashira1.jpg'
    },
    {
        name : 'inoske',
        img : 'chosen/inoske.jpg'
    },
    {
        name : 'zenetsu2',
        img : 'chosen/zenetsu2.jpg'
    },
    {
        name : 'tanjiro',
        img : 'chosen/tanjiro.jpg'
    },
    {
        name : 'nesuko2',
        img : 'chosen/nesuko2.jpg'
    },
    {
        name : 'upper1',
        img : 'chosen/upper1.jpg'
    },
    {
        name : 'butterfly',
        img : 'chosen/butterfly.jpg'
    },
    {
        name : 'upper3',
        img : 'chosen/upper3.jpg'
    },
    {
        name : 'hashira1',
        img : 'chosen/hashira1.jpg'
    },
    {
        name : 'inoske',
        img : 'chosen/inoske.jpg'
    },
    {
        name : 'zenetsu2',
        img : 'chosen/zenetsu2.jpg'
    },
    {
        name : 'tanjiro',
        img : 'chosen/tanjiro.jpg'
    },
    {
        name : 'nesuko2',
        img : 'chosen/nesuko2.jpg'
    },
    {
        name : 'upper1',
        img : 'chosen/upper1.jpg'
    }
]

cardsArray.sort(() => 0.5 - Math.random())
const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard() {
    for (let i = 0; i< cardsArray.length; i++) {
        const cards = document.createElement('img')
        cards.setAttribute('src', 'chosen/blank2.jpg')
        cards.setAttribute('data-id', i)
        cards.addEventListener('click', flipCards)
        gridDisplay.appendChild(cards)
    }
}
createBoard();

function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log(cards)
    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'chosen/blank2.img')
        cards[optionTwoId].setAttribute('src', 'chosen/blank2.img')
       
    }

    if (cardsChosen[0] == cardsChosen[1]) {
        cards[optionOneId].classList.add("hidden")
        cards[optionTwoId].classList.add("hidden")
        cards[optionOneId].removeEventListener('click', flipCards)
        cards[optionTwoId].removeEventListener('click', flipCards)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'chosen/blank2.jpg')
        cards[optionTwoId].setAttribute('src', 'chosen/blank2.jpg')
    }

    resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length == cardsArray.length/2) {
        resultDisplay.textContent = 'Nice'
        document.getElementById("win").style.visibility = "visible";
        document.getElementById("ag").style.visibility = "visible";

        // alert ('you won')
    }
}

function flipCards() {
    const cardsId = this.getAttribute('data-id')
    cardsChosen.push(cardsArray[cardsId].name)
    cardsChosenIds.push(cardsId)
    console.log(cardsChosen)
    console.log(cardsChosenIds)
    this.setAttribute('src', cardsArray[cardsId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 300)
    }
}