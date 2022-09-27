function solve() {
    let text = document.getElementById('input').value.split('. ');
    let output = document.getElementById('output');
    while(output.firstChild){
        output.removeChild(output.lastChild);
    }
    if(text[0] === '')
        return;
    for(let i = 0; i < text.length; i+=3){
        let newText = '';
        for(let j = 0; j < 3; j++){
            newText += text[i+j] + '. ';
        }
        output.appendChild(document.createElement('p')).textContent = newText.trim();
    }
}