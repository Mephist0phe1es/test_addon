let position = 0;
var BR = document.querySelector('.btnRight');           //Button Right
var BL = document.querySelector('.btnLeft');           //Button Left
var BC = document.querySelector('.btnCentr');           //Button Centr

BR.addEventListener('click', () => {                                    //�������� �������, ������� ������� ������������ "������"
    position = -600;                                                    // ��������� ������� ��� ��������
    const track = document.querySelector('.slider-track');              //�������� ���������� ��� ��������
    track.style.left = position + 'px';                                 // ��������� ������� ��������
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