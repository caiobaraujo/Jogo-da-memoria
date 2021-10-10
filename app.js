document.addEventListener('DOMContentLoaded', () => {
  const cardArray = [
    {
      name: 'java',
      img: 'images/java.png ',
    },
    {
      name: 'java',
      img: 'images/java.png ',
    },
    {
      name: 'python',
      img: 'images/python.png ',
    },
    {
      name: 'python',
      img: 'images/python.png ',
    },
    {
      name: 'php',
      img: 'images/php.png ',
    },
    {
      name: 'php',
      img: 'images/php.png ',
    },
    {
      name: 'javascript',
      img: 'images/javascript.png ',
    },
    {
      name: 'javascript',
      img: 'images/javascript.png ',
    },
    {
      name: 'C#',
      img: 'images/Csharp.png ',
    },
    {
      name: 'C#',
      img: 'images/Csharp.png ',
    },
    {
      name: 'ruby',
      img: 'images/ruby.png ',
    },
    {
      name: 'ruby',
      img: 'images/ruby.png ',
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector('.grid');
  const resultDisplay = document.querySelector('#result');
  cardsChosen = [];
  cardsChosenId = [];
  let cardsWon = [];
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img');
      card.setAttribute('src', 'images/blank.png');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      grid.appendChild(card);
    }
  }

  function checkForMatch() {
    const cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png');
      cards[optionTwoId].setAttribute('src', 'images/blank.png');
      alert('You have clicked the same image!');
    } else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match');
      cards[optionOneId].setAttribute('src', 'images/white.png');
      cards[optionTwoId].setAttribute('src', 'images/white.png');
      cards[optionOneId].removeEventListener('click', flipCard);
      cards[optionTwoId].removeEventListener('click', flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png');
      cards[optionTwoId].setAttribute('src', 'images/blank.png');
      alert('Sorry, try again');
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      //resultDisplay.textContent = 'Congratulations! You found them all!';
      window.location.replace('index2.html');
    }
  }

  function flipCard() {
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
