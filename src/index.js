import loadHomePage from './home';
import loadMenuPage from './menu';
import loadContactPage from './contact';

document.addEventListener('DOMContentLoaded', () => {
    const homeBtn = document.getElementById('home-btn');
    const menuBtn = document.getElementById('menu-btn');
    const contactBtn = document.getElementById('contact-btn');

    homeBtn.addEventListener('click', loadHomePage);
    menuBtn.addEventListener('click', loadMenuPage);
    contactBtn.addEventListener('click', loadContactPage);

    loadHomePage(); // Load homepage by default
});
