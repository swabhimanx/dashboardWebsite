//To add
const menuToggleOpen= document.querySelector('.menu-toggle-open');
const menuToggleClose= document.querySelector('.menu-toggle-close');
const navMobileElement= document.querySelector('.nav-mobile');

menuToggleOpen.addEventListener('click', ()=> navMobileElement.classList.add('active'));
menuToggleClose.addEventListener('click', ()=> navMobileElement.classList.remove('active'));
//Toggle theme
const bodyElement= document.body;
const themeToggleBtn= document.querySelector('.theme-toggle-btn');
const currentTheme= localStorage.getItem('currentTheme');
if(currentTheme){
    bodyElement.classList.add('theme-light');
}
themeToggleBtn.addEventListener('click',()=>{
    bodyElement.classList.toggle('theme-light');
    if(bodyElement.classList.contains('theme-light')){
        localStorage.setItem('currentTheme', 'themeActive');
    }
    else{
        localStorage.removeItem('currentTheme', 'themeActive');
    }
})
//show dropdown menu
document.addEventListener('click',Element=>{
    const dropdown=document.querySelector('.dropdown');
    if(Element.target.classList.contains('dropdown-btn')){
        dropdown.classList.add('active');
    }
    else{
        dropdown.classList.remove('active');
    }
})