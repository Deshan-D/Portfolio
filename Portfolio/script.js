const menuIcon = document.querySelector('#menu-icon');
const navlinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navlinks.classList.toggle('active');
}
window.onscroll = () => {
    navlinks.classList.remove('active');
}


const typed = new typed('.multiple-text', {
      strings: ['Frontend Developer', 'Computer Hardware Technician'],
      typeSpeed: 60,
      backSpeed: 60,
      backDelay: 1000,
      loop: true,
    });