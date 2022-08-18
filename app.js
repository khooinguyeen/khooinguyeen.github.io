const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content')[0];



function PageTransitions(){
    const themeBtn = document.querySelector('.theme-btn');
    const element = document.body.classList;
    //Toggle theme
    themeBtn.addEventListener('click',() =>{
        if(localStorage.getItem('theme') == 'light') {
            localStorage.clear()
            element.remove('light-mode')
        }
        else {
            localStorage.setItem('theme', 'light')
            element.toggle('light-mode')
        }
    });
    if(localStorage.getItem('theme') == 'light') {
        element.toggle('light-mode')
    }
    else {
        element.remove('light-mode')
    }
}

PageTransitions()