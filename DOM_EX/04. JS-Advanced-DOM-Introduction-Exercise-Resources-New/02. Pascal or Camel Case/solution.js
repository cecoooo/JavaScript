function solve() {
  let input = document.getElementById("text").value;
  let convention = document.getElementById("naming-convention").value;
  let res = "";
  switch(convention){
    case "Camel Case": 
      res = input.split(' ').map((x, i) => i !== 0 ? makeToUpper(x): makeToLower(x)).join('');
    break;
    case "Pascal Case": 
      res = input.split(' ').map(x => makeToUpper(x)).join('');
    break;
    default: 
      res = "Error!"; 
    break;
  }
  document.getElementById("result").innerHTML = res;
  function makeToUpper(word){
    let noFirstLetter = '';
    for(let i = 1; i < word.length; i++){
      noFirstLetter += word[i].toLowerCase();
    }
    return word[0].toUpperCase() + noFirstLetter;
  }
  
  function makeToLower(word){
    let res = '';
    for(let i = 0; i < word.length; i++){
      res += word[i].toLowerCase();
    }
    return res;
  }
}