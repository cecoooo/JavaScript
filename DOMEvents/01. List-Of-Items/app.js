function addItem() {
    document.getElementById('items').appendChild(document.createElement('li')).textContent = document.getElementById('newItemText').value
}