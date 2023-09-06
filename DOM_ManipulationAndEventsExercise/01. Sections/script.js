function create(words) {
   let div = document.getElementById('content');
   for(let i = 0; i < words.length; i++){
      div.appendChild('div').appendChild('p').textContent = words[i];
   }
}