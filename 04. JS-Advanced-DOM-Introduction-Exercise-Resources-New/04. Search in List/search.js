function search() {
   let arr = document.getElementsByTagName('li');
   let fragment = document.getElementById('searchText').value;
   let counter = 0;

   for(let i = 0; i < arr.length; i++){
      document.getElementsByTagName('li')[i].style.textDecoration = 'none';
      document.getElementsByTagName('li')[i].style.fontWeight = 'normal';
   }

   for(let i = 0; i < arr.length; i++){
      if(arr[i].innerText.includes(fragment)){
         document.getElementsByTagName('li')[i].style.fontWeight = 'bold';
         document.getElementsByTagName('li')[i].style.textDecoration = 'underline';
         counter++;
      }
   }
   document.getElementById('result').innerHTML = `${counter} matches found`;
}
