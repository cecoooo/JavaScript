function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {  
      let arr = document.getElementsByTagName('tr');
      for(let i = 0; i < arr.length; i++){
         document.getElementsByTagName('tr')[i].classList.remove('select');
      }
      let arrText = [];
      for(let  i = 2; i < arr.length; i++){  
         arrText.push(arr[i].innerText.toLowerCase());
      }
      let textt = document.getElementById('searchField').value.toLowerCase();
      for(let i = 0; i < arrText.length; i++){
         if(arrText[i].includes(textt) && textt !== ''){
            document.getElementsByTagName('tr')[i+2].classList.add('select');
         }
      }
   }
}
