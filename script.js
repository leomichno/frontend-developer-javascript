const commandMenuActivator=document.querySelector('.navbar-email');
const desktopMenu=document.querySelector('.desktop-menu');

commandMenuActivator.addEventListener('click', activator);


function activator(){
    desktopMenu.classList.toggle('inactivity')
}   