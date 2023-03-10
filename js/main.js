function burgerMenu() {
    const menu = document.querySelector('#menu');
    const burger = document.querySelector('.burger');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        menu.classList.toggle('hidden');
        menu.classList.toggle('flex');
    })
}
burgerMenu()

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
} else {
    document.documentElement.classList.remove('dark')
}

const modeBtn = document.querySelector('#mode');

modeBtn.addEventListener('click', () => {
    const html=document.querySelector('html');
    html.classList.toggle('dark');
    
    if(html.classList.contains('dark')){
        localStorage.theme='dark';
    }else{
        localStorage.theme='light';
    }
})