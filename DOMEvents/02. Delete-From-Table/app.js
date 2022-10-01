function deleteByEmail() {
    let input = document.getElementsByName('email')[0].value;
    let arrEmails = [];
    let arrFull = document.getElementsByTagName('td');
    for(let i = 0; i < arrFull.length; i++){
        if(i % 2 !== 0)
            arrEmails.push(arrFull[i].textContent);
    }
    let bool = true;
    for(let  i = 0; i < arrEmails.length; i++){
        if(arrEmails[i] === input){
            document.getElementsByTagName('tbody')[0].removeChild(document.getElementsByTagName('tr')[i+1])
            bool = false;
        }
    }
    if(bool)
        document.getElementById('result').textContent = 'Not found.';
    else
        document.getElementById('result').textContent = 'Deleted.';
}