import './style.css';

function homeComponent() {
    clearContent();
    const element = document.createElement('div');

    element.classList.add('homeContainer');
    element.innerHTML = '<h1>Welcome to ABC Restuarant!</h1>' 
    + '<img class="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD9XVTXhoQvQ1GNw2v945NFit2jqNQHX2HOQ&usqp=CAU">'
    + '<h3>ABC Restuarant is the leading restuarant for learning and eating your ABCs.</h3>';

    document.getElementById('content').appendChild(element);
}

function menuComponent() {
    clearContent();
    const element = document.createElement('div');

    element.classList.add('menuContainer');
    element.innerHTML = '<h1>Menu</h1>' 
    + '<img class="image" src="https://www.merchantsmarket.com/wp-content/uploads/2018/01/menu.png">'
    + '<h3>Great Menu</h3>';

    document.getElementById('content').appendChild(element);
}

function aboutComponent() {
    clearContent();
    const element = document.createElement('div');

    element.classList.add('aboutContainer');
    element.innerHTML = '<h1>About ABC Restaurant</h1>' 
    + '<img class="image" src="https://m.media-amazon.com/images/I/81Vr0-VQhOL._AC_UF894,1000_QL80_.jpg">'
    + '<h3>Study</h3>';

    document.getElementById('content').appendChild(element);
}

function clearContent() {
    const element = document.getElementById('content');
    element.innerHTML = '';
}

document.getElementById('homeButton').addEventListener("click", homeComponent);
document.getElementById('menuButton').addEventListener("click", menuComponent);
document.getElementById('aboutButton').addEventListener("click", aboutComponent);

document.getElementById('content').appendChild(homeComponent());