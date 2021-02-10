let position = 0;
var BR = document.querySelector('.btnRight');
var BL = document.querySelector('.btnLeft');
var BC = document.querySelector('.btnCentr');

BR.addEventListener('click', () => {
    position = -600;
    const track = document.querySelector('.slider-track');
    track.style.left = position + 'px';
});

BL.addEventListener('click', () => {
    position = 0;
    const track = document.querySelector('.slider-track');
    track.style.left = position + 'px';
});

BC.addEventListener('click', () => {
    position = -300;
    const track = document.querySelector('.slider-track');
    track.style.left = position + 'px';
});