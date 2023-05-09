const slider = document.querySelector('.photo-slider');
const slederItems = document.querySelectorAll('.slider__item');
const sliderLine = document.querySelector('.photo-slider__line');
const sliderBtns = document.querySelectorAll('.slider__btn');


sliderLine.style.width = `${269 * slederItems.length}px`

slederItems.forEach((item) => {
    if ( item.getAttribute('data-head-item') != 'first' ) {
        item.classList.add('secondary-items')
    }
})

let count = 0;
let margin = 0;

sliderBtns[0].addEventListener('click', () => {
    if ( count < 5 ) {
        margin += sliderLine.offsetWidth / slederItems.length;
        sliderLine.style.margin = `0px 0px 0px ${-margin}px`;
        console.log('it\'s working');
        count++;
    } else {
        margin = 0;
        sliderLine.style.margin = `0px 0px 0px ${-margin}px`;
        count = 0;
    }
})