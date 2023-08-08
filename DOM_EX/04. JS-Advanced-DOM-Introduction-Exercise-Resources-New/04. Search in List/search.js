function search() {
   let listOfTowns = document.getElementsByTagName('li');
   let currTown = document.getElementById('searchText').value;
   let count = 0;
   for(let i = 0; i < listOfTowns.length; i++){
      if(listOfTowns[i].innerText.includes(currTown) && currTown !== ''){
         document.getElementsByTagName('li')[i].style.fontWeight = 'bold';
         document.getElementsByTagName('li')[i].style.textDecoration = 'underline';
         count++;
      }
   }
   if(count === 0){
      for(let i = 0; i < listOfTowns.length; i++){
         document.getElementsByTagName('li')[i].style.fontWeight = 'normal';
         document.getElementsByTagName('li')[i].style.textDecoration = 'none';      
      }
   }
   document.getElementById('result').innerText = count+' matches found';
}
