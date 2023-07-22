function AddAndRemoveElements(arr){
    let res = [];
    let resText = '';
    for(i = 0; i < arr.length; i++){
        switch(arr[i]){
            case 'add': res.push(i+1); break;
            case 'remove': res.pop(); break;
        }
    }
    return arr.length !== 0 ? res.join('\n') : 'Empty';
}

console.log(AddAndRemoveElements(['add', 'add', 'remove', 'add', 'add']));