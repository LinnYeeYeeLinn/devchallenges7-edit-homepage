// nav-menu open close
const menu = document.querySelector('.menu');
const nav = document.querySelector('header nav');
const links = document.querySelectorAll("header nav a");
const section  = document.querySelectorAll("section");

menu.addEventListener('click', () => {
    nav.classList.toggle('open-close');
})

links.forEach(link => {
    link.addEventListener('click', (event) => {
      for(let i = 0; i < section.length; i++){
        for(let j = 0; j < links.length; j++){
            links[j].className = links[j].className.replace('active', '');
        }
        event.currentTarget.className += ' active';
    }
    nav.classList.remove('open-close');
    })
})