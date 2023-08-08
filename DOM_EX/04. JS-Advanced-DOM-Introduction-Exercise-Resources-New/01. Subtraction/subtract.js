function subtract() {
    let firstNum = Number(document.getElementById("firstNumber").getAttribute("value"));
    let secondNum = Number(document.getElementById("secondNumber").getAttribute("value"));
    document.getElementById("result").innerText = firstNum-secondNum;
}