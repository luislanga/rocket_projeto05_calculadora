let firstNum, secondNum, sum, subtraction, multiplication, division, remainder

firstNum = Number(prompt("Insira o primeiro número")) 
secondNum = Number(prompt("Insira o primeiro número")) 

sum = firstNum + secondNum
subtraction = firstNum - secondNum
multiplication = firstNum * secondNum
division = firstNum / secondNum
remainder = firstNum % secondNum

alert(`A soma é ${sum}`)
alert(`A subtração é ${subtraction}`)
alert(`A multiplicação é ${multiplication}`)
alert(`A divisão é ${division}`)
alert(`O resto da divisão é ${remainder}`)

if((sum%2) == 0){
    alert("A soma dos dois números é par!")
} else{
    alert("A soma dos dois números é ímpar!")
}

if(firstNum == secondNum){
    alert("Os dois números inseridos são iguais")
} else{
    alert("Os dois números inseridos são diferentes")
}
