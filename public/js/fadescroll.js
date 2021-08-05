const start = 630;
const cards = document.querySelector('#cards');
window.addEventListener("scroll", () => {
    if(window.pageYOffset >= start){
        if(cards.classList.contains('fadeout'))
            cards.classList.remove('fadeout');
        cards.classList.add('fadein');
    }
    else {
        if(cards.classList.contains('fadein'))
            cards.classList.remove('fadein');
        cards.classList.add('fadeout');
    }
});