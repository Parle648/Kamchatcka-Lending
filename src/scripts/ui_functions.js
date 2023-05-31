export function createSlider(line, items, btns, maxCounter = items.length - 2) {
    line.style.width = `${269 * items.length}px`

    // items.forEach((item) => {
    //     if ( item.getAttribute('data-head-item') != 'first' ) {
    //         item.classList.add('secondary-items')
    //     }
    // })

    let count = 0;
    let margin = 0;

    btns[0].addEventListener('click', () => {
        if ( count < maxCounter ) {
            // items[count + 1].classList.remove('secondary-items');
            margin -= 269 + 67;
            line.style.margin = `0px 0px 20px ${margin}px`;
            count++;
        } else {
            margin = 0;
            line.style.margin = `0px 0px 20px ${margin}px`;
            count = 0;
            // add style for make images little
            // items.forEach((item) => {
            //     if ( item.getAttribute('data-head-item') != 'first' ) {
            //         item.classList.add('secondary-items')
            //     }
            // })
        }
    })

    btns[1].addEventListener('click', () => {
        if ( count > 0 ) {
            // items[count].classList.add('secondary-items');
            margin += (269 + 67);
            line.style.margin = `0px 0px 20px ${margin}px`;
            count--;
        } else {
            margin = -1008;
            line.style.margin = `0px 0px 20px ${margin}px`;
            count = maxCounter;
            // add style for make images little
            // items.forEach((item) => {
            //     item.classList.remove('secondary-items')
            // })
            // items[items.length - 1].classList.add('secondary-items')
        }
    })
}