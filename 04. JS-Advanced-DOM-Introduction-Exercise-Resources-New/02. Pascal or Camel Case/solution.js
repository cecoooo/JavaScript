function solve() {
    let element = document.getElementById('text').value;
    let convention =  document.getElementById('naming-convention').value;

    let arr = element.split(' ');
    let res = '';
    switch(convention){
      case 'Camel Case':
          let word = arr[0].toLowerCase()
          arr.splice(0, 1, word);
          res = arr.map((x, i) => {
            if(i !== 0)
              return makeToUpper(x)
            else 
              return x
          }).join('');
          break;
      case 'Pascal Case':
          res =arr.map(x => makeToUpper(x)).join('');
          break;
      default:
           res = 'Error!';
          break;
    }

    function makeToUpper(x){
      let without0 = '';
      for(let i = 1; i < x.length; i++){
          without0 += x[i].toLowerCase();
      }
      return x[0].toUpperCase()+without0;
    }
    document.getElementById('result').innerHTML = res;
}