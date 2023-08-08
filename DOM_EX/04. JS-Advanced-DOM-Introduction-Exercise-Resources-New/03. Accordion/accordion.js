function toggle() {
    let displayStyle = document.getElementById('extra').style.display;
    if(displayStyle === 'none'){
        document.getElementById('extra').style.display = 'block';
        document.getElementsByClassName('button')[0].innerHTML = 'Less';
    }
    else{
        document.getElementById('extra').style.display = 'none';
        document.getElementsByClassName('button')[0].innerHTML = 'More';
    }
}