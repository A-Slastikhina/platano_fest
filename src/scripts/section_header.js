//Мини-код для отображения шапки при прокрутке

let sectionHeader = document.querySelector('.section-header');

// let siteBody = document.querySelector('body');

window.addEventListener('scroll', bodyScroll)
function bodyScroll (){
    sectionHeader.style.opacity = '0.5';
    sectionHeader.style.backgroundColor = '#FFC64F';
    sectionHeader.style.transition = '0.3s'

}

sectionHeader.addEventListener('mouseover', onHeader)
function onHeader (){
    sectionHeader.style.opacity = '1';
    sectionHeader.style.backgroundColor = '#111111';
    sectionHeader.style.transition = '0.3s'


}

sectionHeader.addEventListener('mouseout', outHeader)
function outHeader () {;
    sectionHeader.style.opacity = 0.5
    sectionHeader.style.transition = '0.3s'

}

