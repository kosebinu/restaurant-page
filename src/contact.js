export default function loadContactPage() {
    const content = document.getElementById('content');
    content.textContent = '';

    const heading = document.createElement('h1');
    heading.textContent = 'Contact Us';
    content.appendChild(heading);

    const contactInfo = document.createElement('p');
    contactInfo.textContent = 'Email: contact@restaurant.com';
    content.appendChild(contactInfo);
}
