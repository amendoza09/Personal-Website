function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.onscroll = function() {
    const abt = document.querySelector('#about');
    const proj = document.querySelector('#projects');
    const nav = document.querySelector('nav');
    const a = document.querySelector('a');
    
    if ((abt.getBoundingClientRect().top <= 20) && (abt.getBoundingClientRect().bottom > 20)) {
        nav.classList.add('light');
        a.classList.add('light');
    } else {
        nav.classList.remove('light');
        a.classList.remove('light');
    }
  }