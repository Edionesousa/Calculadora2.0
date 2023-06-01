const previousOperationText = document.querySelector("#previous-operation");
const currentOperationText = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("#buttons-container button");

class calculator {
    constructor(previousOperationText, currentOperationText){
        this.previousOperationText = previousOperationText
        this.currentOperationText = currentOperationText
        this.currentOperation = "";
    }

}

const calc = (previousOperationText, currentOperationText)

console.log(calc)

buttons.forEach((btn) =>{
    btn.addEventListener("click", (e) =>{
        const value = e.target.innerText;

        if(+value >= 0 || value === "."){
            console.log(value);
        }else{
            console.log("OP +", value);
        }
    })
})

