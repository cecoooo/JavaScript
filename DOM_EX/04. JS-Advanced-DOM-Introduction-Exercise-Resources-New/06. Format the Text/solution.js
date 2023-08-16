function solve() {
  let text = document.getElementById('input').value.split('.').filter(x => x !== '').map(x => x.trim()+'. ');
  let output = document.getElementById('output');
  while(output.firstChild){
    output.removeChild(output.lastChild);
  }
  for(let i = 0; i < text.length; i+=3){
    if(i+1 === text.length){
      document.getElementById('output').appendChild(document.createElement('p')).textContent = text[i]; 
      break; 
    }
    if(i+2 === text.length){
      document.getElementById('output').appendChild(document.createElement('p')).textContent = text[i] 
      + text[i+1];
      break;  
    }
    output.appendChild(document.createElement('p')).textContent = text[i] 
    + text[i+1] + text[i+2];
  }
}