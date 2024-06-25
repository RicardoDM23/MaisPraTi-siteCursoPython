const track = document.querySelector('.carouselTrack');
const slides = Array.from(track.children);
const prevBtn = document.querySelector('.carouselButtonLeft');// <-
const nextBtn = document.querySelector('.carouselButtonRight'); // ->
const dotsNav = document.querySelector('.carouselNav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

// organizar os slides um ao lado do outro
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('currentSlide');
    targetSlide.classList.add('currentSlide');
};

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('currentSlide');
    targetDot.classList.add('currentSlide');
};

const nextEvent = (e) => {
    const currentSlide = track.querySelector('.currentSlide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.currentSlide');
    const nextDot = currentDot.nextElementSibling;
    if(nextSlide == null){
        const firstSlide = track.firstElementChild;
        const firstDot = dotsNav.firstElementChild;
        moveToSlide(track, currentSlide, firstSlide);
        updateDots(currentDot, firstDot);
    } else {
        moveToSlide(track, currentSlide, nextSlide);
        updateDots(currentDot, nextDot);
    };
};

const provEvent = (e) => {
    const currentSlide = track.querySelector('.currentSlide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.currentSlide');
    const prevDot = currentDot.previousElementSibling;
    if(prevSlide == null){
        const lastSlide = track.lastElementChild;
        const lastDot = dotsNav.lastElementChild;
        moveToSlide(track, currentSlide, lastSlide);
        updateDots(currentDot, lastDot);
    } else {
        moveToSlide(track, currentSlide, prevSlide);
        updateDots(currentDot, prevDot);
    };
};

const dotEvent = (e) => {
    // qual indicador foi clicado
    const targetDot = e.target.closest('button');
    if (!targetDot) return; // se for falso/null termina

    const currentSlide = track.querySelector('.currentSlide');
    const currentDot = dotsNav.querySelector('.currentSlide');
    //retorna/get index de qual dot foi clicado
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
}
// quando clicar, mover slide para direita e esquerda
nextBtn.addEventListener('click', nextEvent);
prevBtn.addEventListener('click', provEvent);
setInterval(nextEvent, 8000);

// quando clicar no indicar nav, mover para o slide corespondente
dotsNav.addEventListener('click', dotEvent);