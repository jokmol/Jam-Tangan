const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

const darkMode = document.getElementById('dark-mode')
const lightMode = document.getElementById('light-mode')

const toogle = document.getElementById('toogleDark')
const body = document.querySelector('body ')

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark__mode')
    darkMode.classList.toggle('hide')
    lightMode.classList.remove('hide')
})

lightMode.addEventListener('click', () => {
    document.body.classList.remove('dark__mode')
    lightMode.classList.toggle('hide')
    darkMode.classList.remove('hide')
})

toogle.addEventListener('click', function(){
    this.classList.toggle('bi-moon')
})
