function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.onscroll = function() {
    const abt = document.querySelector('#about');
    const nav = document.querySelector('nav');
    const links = document.querySelectorAll('a');
    
    if ((abt.getBoundingClientRect().top <= 20) && (abt.getBoundingClientRect().bottom >= 20)) {
        nav.classList.add('light');
        links.forEach(x=>x.classList.add('light'));
    } else {
        nav.classList.remove('light');
        links.forEach(x=>x.classList.remove('light'));;
    }
  }