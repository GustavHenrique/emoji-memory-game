const emojis = [
    '🚀', 
    '🚀', 
    '🌍', 
    '🌍', 
    '🚗', 
    '🚗', 
    '🚲', 
    '🚲', 
    '🚁', 
    '🚁', 
    '🚂', 
    '🚂', 
    '🚢', 
    '🚢', 
    '🚤', 
    '🚤'
];

let openCards = [];

let shuffleEmojis = emojis.sort(() => Math.random() > 0.5 ? 2 : -1);

for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement('div');
    box.className = 'item';
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector('.game').appendChild(box);
}

function handleClick() {
    if (this.classList.contains('box-open') || this.classList.contains('box-matched')) {
        return;
    }
    if (openCards.length < 2) {
        this.classList.add('box-open');
        openCards.push(this);
    }
    if (openCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    if (openCards[0].innerHTML !== openCards[1].innerHTML) {
        openCards[0].classList.remove('box-open');
        openCards[1].classList.remove('box-open');
    } else {
        openCards[0].classList.add('box-matched');
        openCards[1].classList.add('box-matched');
    }

    openCards = [];

    if (document.querySelectorAll('.box-matched').length === emojis.length) {
        setTimeout(() => {
            alert('You won!');
        }, 500);
    }
}