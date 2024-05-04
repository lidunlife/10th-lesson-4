let num1 = prompt(`Write your number 1`)
let num2 = prompt(`Write your number 2`)

function nums(num1,num2) {
    if (num1>num2) {
        alert(num1 + ` is bigger than` + num2 )
    }
    else if(num2>num1){
        alert(num2 + ` is bigger than ` +num1)
    }
    else{
        alert(num1 + ` equal to ` + num2)
    }
}
nums(num1,num2)