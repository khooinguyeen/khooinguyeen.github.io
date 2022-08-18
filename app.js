const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content')[0];



function PageTransitions(){
    const themeBtn = document.querySelector('.theme-btn');
    const element = document.body;
    //Toggle theme
    if(localStorage.getItem('theme-button') == 'clicked') {
        element.classList.toggle('light-mode')
    }
    else {
        element.classList.remove('light-mode')
    }
    //Button
    themeBtn.addEventListener('click',() =>{
        if(localStorage.getItem('theme-button') == 'clicked') {
            localStorage.clear()
            element.classList.remove('light-mode')
        }
        else {
            localStorage.setItem('theme-button', 'clicked')
            element.classList.toggle('light-mode')
        }
    });

}

PageTransitions()