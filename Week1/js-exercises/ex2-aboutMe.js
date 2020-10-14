function load() {
    const body = document.body;
    body.style.fontFamily = 'Arial, sans-serif';

    function setText(id, value) {
        const elem = document.getElementById(id);
        elem.innerText = value;
    }
    setText('nickname', 'Tarook');
    setText('hometown', 'Damascus');
    setText('fav-food', 'pizza');
    const listItems = document.getElementsByTagName('li');
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].className = 'list-item';
    }
    const newImage = document.createElement('img');
    newImage.src = 'pic.png';
    body.appendChild(newImage);
}

window.onload = load;