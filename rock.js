let card1 = document.getElementById('card1');
let card2 = document.getElementById('card2');
let card3 = document.getElementById('card3');
let card4 = document.getElementById('card4');
let card5 = document.getElementById('card5');
let card6 = document.getElementById('card6');
let card7 = document.getElementById('card7');
let card8 = document.getElementById('card8');
let card9 = document.getElementById('card9');
let card10 = document.getElementById('card10');
let card11 = document.getElementById('card11');
let card12 = document.getElementById('card12');

let cardBack1 = document.getElementById('card-back1');
let cardBack2 = document.getElementById('card-back2');
let cardBack3 = document.getElementById('card-back3');
let cardBack4 = document.getElementById('card-back4');
let cardBack5 = document.getElementById('card-back5');
let cardBack6 = document.getElementById('card-back6');
let cardBack7 = document.getElementById('card-back7');
let cardBack8 = document.getElementById('card-back8');
let cardBack9 = document.getElementById('card-back9');
let cardBack10 = document.getElementById('card-back10');
let cardBack11 = document.getElementById('card-back11');
let cardBack12 = document.getElementById('card-back12');

const memoryGame = document.querySelector('.container');
    let flippedCards = [];
    let matchedCards = [];

const cards = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

initGame();

function initGame() {
    const shuffledCards = shuffle(cards);

    shuffledCards.forEach((cardValue, index) => {
        const cardElement = document.getElementById(`card${index + 1}`);
        const cardBackElement = document.getElementById(`card-back${index + 1}`);

        if (cardValue === 1) {
            cardBackElement.classList.remove('card-back');
            cardBackElement.classList.add('rock-1');
        } else if (cardValue === 2) {
            cardBackElement.classList.remove('card-back');
            cardBackElement.classList.add('rock-2');
        } else if (cardValue === 3) {
            cardBackElement.classList.remove('card-back');
            cardBackElement.classList.add('rock-3');
        } else if (cardValue === 4) {
            cardBackElement.classList.remove('card-back');
            cardBackElement.classList.add('rock-4');
        } else if (cardValue === 5) {
            cardBackElement.classList.remove('card-back');
            cardBackElement.classList.add('rock-5');
        } else if (cardValue === 6) {
            cardBackElement.classList.remove('card-back');
            cardBackElement.classList.add('rock-6');
        }

        cardElement.dataset.card = cardValue;
        cardElement.className = 'card';
        cardElement.addEventListener('click', () => flipCard(cardElement));
    });
}

function flipCard(card) {
    card.className = 'card card-click';
    console.log(card.className);
    if (flippedCards.length < 2 && !flippedCards.includes(card) && !matchedCards.includes(card)) {
        flippedCards.push(card);

        if (flippedCards.length === 2) {
            setTimeout(checkMatch, 500);
        }
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;

    if (card1.dataset.card === card2.dataset.card) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        matchedCards.push(card1, card2);
        if (matchedCards.length === cards.length) {
            alert('Congratulations! You matched all the cards.');
        }
    } else {
        card1.classList.remove('card-click');
        card2.classList.remove('card-click');
    }

    flippedCards = [];
}