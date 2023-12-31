const state  = {
    view: {
        game: document.querySelector('.game'),
    },

    values: {
        emojis: [ 
            "😎","😎","😍","😍",
            "😴","😴","🥵","🥵",
            "🥶","🥶","🤠","🤠",
            "🤡","🤡","💩","💩",
        ],
        openCards: [],
    },

    actions: {

    },
};

function checkCards () {

    if (state.values.openCards[0].innerHTML === state.values.openCards[1].innerHTML) {
        state.values.openCards[0].classList.add('boxMatch');
        state.values.openCards[1].classList.add('boxMatch');
    }
    else {
        state.values.openCards[0].classList.remove('boxOpen');
        state.values.openCards[1].classList.remove('boxOpen');
        
    };

    state.values.openCards = [];

    if (document.querySelectorAll('.boxMatch').length === state.values.emojis.length) {
        alert("Parabéns! Você venceu!")
    }
}

function handleClick (){
    if (state.values.openCards.length < 2){
        this.classList.add("boxOpen");
        state.values.openCards.push(this);
    };

    if(state.values.openCards.length === 2){
        setTimeout(checkCards,500);
    };
}

function createCards () {
    let shuffleEmojis = state.values.emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));
    
    for (let i = 0; i < state.values.emojis.length; i++){
        let card = document.createElement('div');
        card.className = 'item';
        card.innerHTML = shuffleEmojis[i];
        state.view.game.appendChild(card);

        card.onclick = handleClick;
    }
}




(function () {
    createCards();
})();



