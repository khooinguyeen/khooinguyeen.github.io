const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content')[0];



function PageTransitions(){
    const themeBtn = document.querySelector('.theme-btn');
    //Toggle theme
    themeBtn.addEventListener('click',() =>{
        localStorage.setItem('theme', 'light')
        if(localStorage.getItem('theme') == 'light') {
            document.body.classList.toggle('light-theme')
        }
        else {
            document.body.classList.toggle('dark-theme')
            // localStorage.setItem('theme', 'dark')
        }
    });
    if(localStorage.getItem('theme') == 'light') {
        document.body.classList.toggle('light-theme')
    }
}

PageTransitions()