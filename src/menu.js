export default function loadMenuPage() {
    const content = document.getElementById('content');
    content.textContent = '';

    const heading = document.createElement('h1');
    heading.textContent = 'Menu';
    content.appendChild(heading);

    const menuItems = ['Pizza', 'Pasta', 'Salad'];
    menuItems.forEach(item => {
        const menuItem = document.createElement('p');
        menuItem.textContent = item;
        content.appendChild(menuItem);
    });
}
