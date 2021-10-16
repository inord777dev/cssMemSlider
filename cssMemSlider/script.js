//git commit -m "init: start CodeJam CSSMemSlider-task `date +'%Y-%m-%d %H:%M:%S'`"

document.addEventListener('DOMContentLoaded', () => {
    const btmItem = document.querySelectorAll('.btm__item');
    [...btmItem].forEach( x => x.addEventListener('click', event => {
        const elem = event.currentTarget;
        if (elem.classList.contains('btm__item') && !elem.classList.contains('active')) {
            shift = Number(elem.dataset.item);

            const active = document.querySelector('.active');
            active.classList.remove('active');

            const slider = document.querySelector('.pic__inner');
            slider.style.left = `-${shift * 100}%`;

            elem.classList.add('active');

        }
    }))
})