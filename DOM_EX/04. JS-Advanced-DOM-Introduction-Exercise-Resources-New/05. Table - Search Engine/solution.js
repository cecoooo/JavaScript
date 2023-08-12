function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let names = document.getElementsByTagName('tr');
      let input = document.getElementById('searchField').value;
      for(let i = 2; i < names.length; i++){
            document.getElementsByTagName('tr')[i].classList.remove('select');
      }
      for(let i = 2; i < names.length; i++){
         if(names[i].innerText.includes(input) && input !== ''){
            document.getElementsByTagName('tr')[i].classList.add('select');
         }
      }
   }
}