function addItem() {
    document.getElementById('items').appendChild(document.createElement('li')).textContent = 
    document.getElementById('newItemText').value;

    var element = document.getElementsByTagName('li')[0];

    var href = element.appendChild(document.createElement('a'));    
    href = document.createTextNode('[Delete]');
    href.textContent = '[Delete]'
}