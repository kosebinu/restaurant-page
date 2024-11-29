export default function loadHomePage() {
    const content = document.getElementById('content');
    content.textContent = ''; 

    const heading = document.createElement('h1');
    heading.textContent = 'Welcome to the Best Restaurant!';
    content.appendChild(heading);

    const description = document.createElement('p');
    description.textContent = 'Delicious food served with love.';
    content.appendChild(description);
}
