const cardsArray = [
    {
        name : 'a3',
        img : 'chosen/a3.jpg'
    },
    {
        name : 'arisu',
        img : 'chosen/arisu.jpg'
    },
    {
        name : 'arisu2',
        img : 'chosen/arisu2.jpg'
    },
    {
        name : 'as',
        img : 'chosen/as.jpg'
    },
    {
        name : 'ayanokoji',
        img : 'chosen/ayanokoji.jpg'
    },
    {
        name : 'kei',
        img : 'chosen/kei.png'
    },
    {
        name : 'poker',
        img : 'chosen/poker.jpg'
    },
    {
        name : 'suzune',
        img : 'chosen/suzune.jpg'
    },
    {
        name : 'aa',
        img : 'chosen/aa.jpg'
    },
    {
        name : 'as2',
        img : 'chosen/as2.jpg'
    },
    {
        name : 'f',
        img : 'chosen/f.jpg'
    },
    {
        name : 'kei2',
        img : 'chosen/kei2.jpg'
    },
    {
        name : 'a3',
        img : 'chosen/a3.jpg'
    },
    {
        name : 'arisu',
        img : 'chosen/arisu.jpg'
    },
    {
        name : 'arisu2',
        img : 'chosen/arisu2.jpg'
    },
    {
        name : 'as',
        img : 'chosen/as.jpg'
    },
    {
        name : 'ayanokoji',
        img : 'chosen/ayanokoji.jpg'
    },
    {
        name : 'kei',
        img : 'chosen/kei.png'
    },
    {
        name : 'poker',
        img : 'chosen/poker.jpg'
    },
    {
        name : 'suzune',
        img : 'chosen/suzune.jpg'
    },    {
        name : 'aa',
        img : 'chosen/aa.jpg'
    },
    {
        name : 'as2',
        img : 'chosen/as2.jpg'
    },
    {
        name : 'f',
        img : 'chosen/f.jpg'
    },
    {
        name : 'kei2',
        img : 'chosen/kei2.jpg'
    },
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
        cards.setAttribute('src', 'chosen/blank4.jpg')
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
        cards[optionOneId].setAttribute('src', 'chosen/blank4.img')
        cards[optionTwoId].setAttribute('src', 'chosen/blank4.img')
       
    }

    if (cardsChosen[0] == cardsChosen[1]) {
        cards[optionOneId].classList.add("hidden")
        cards[optionTwoId].classList.add("hidden")
        cards[optionOneId].removeEventListener('click', flipCards)
        cards[optionTwoId].removeEventListener('click', flipCards)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'chosen/blank4.jpg')
        cards[optionTwoId].setAttribute('src', 'chosen/blank4.jpg')
    }

    resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length == cardsArray.length/2) {
        resultDisplay.textContent = 'Nice'
        document.getElementById("mn").style.visibility = "visible";
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