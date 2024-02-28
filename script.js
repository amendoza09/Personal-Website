function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.onscroll = function() {
    const abt = document.querySelector('#about');
    const nav = document.querySelector('nav');
    const burgerLinks = document.querySelectorAll('a')
    const burger_icon = document.querySelector('#hamburger-nav');
    
    if ((abt.getBoundingClientRect().top <= 30) && (abt.getBoundingClientRect().bottom >= 30)) {
        nav.classList.add('light');
        burgerLinks.forEach(x=>x.classList.add('invert'));
        burger_icon.classList.add('invert');
    } else {
        nav.classList.remove('light');
        burgerLinks.forEach(x=>x.classList.remove('invert'));
        burger_icon.classList.remove('invert');
    }
}

document.getElementById("email-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);

  try {
    console.log('Form Data:', formData);

    const response = await fetch(form.action, {
      method: form.method,
      body: formData
    });

    const data = await response.json();
    console.log('Response Data:', data);
    alert(data.message);
  } catch (error) {
    console.error('Error submitting form:', error);
    alert('script.js error occurred');
  }
});
