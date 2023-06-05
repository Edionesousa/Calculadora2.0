const previousOperationText = document.querySelector("#previous-operation");
const currentOperationText = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("#buttons-container button");

class calculator {
    constructor(previousOperationText, currentOperationText){
        this.previousOperationText = previousOperationText
        this.currentOperationText = currentOperationText
        this.currentOperation = "";
    }

    //add digit to calculator screen
    addDigit(digit){

        // check if current operation already has a dot
        if(digit ==="." && this.currentOperationText.innerText.includes(".")){
            return;
        }
        this.currentOperation = digit;
        this.updateScreen();
    }
    // precess all calculator operation
    processOperation(operation){
        // check is current is emptu
        if(this.currentOperationText.innerText === ""){
            // change opetation
            if(this.previousOperationText.innerText !== ""){
                this.chengeOperation(operation);
            }
            return;
        }
        let operationValue
        const previous =+ this.previousOperationText.innerText.split(" ")[0];
        const current =+ this.currentOperationText.innerText
    
        switch(operation){
            case "+":
                operationValue = previous + current;
                this.updateScreen(operationValue, operation, current, previous)
            break;
            case "-":
                operationValue = previous - current;
                this.updateScreen(operationValue, operation, current, previous)
            break;
            case "/":
                operationValue = previous / current;
                this.updateScreen(operationValue, operation, current, previous)
            break;
            case "*":
                operationValue = previous * current;
                this.updateScreen(operationValue, operation, current, previous)
            break;
            case "DEL":
                this.processDelOperator();
            break;
            case "C":
                this.processClearOperator();
            break;
            case "CE":
                this.processClearAllOperator();
            break;
            default:
            return;
        }

    }
    // change values of the calculator screen
    updateScreen(
        operationValue = null,
        operation = null,
        current = null,
        previous = null
    ){

        if(operationValue === null){
            this.currentOperationText.innerText += this.currentOperation;
        }else{
            // check if value is zero, if it just add current value.
            if(previous === 0){
                operationValue = current;
            }

            //add current value to previous
            this.previousOperationText.innerText = `${operationValue} ${operation}`
            this.currentOperationText.innerText = "";
        }
    }
    //chenge math opretion

    chengeOperation(operation){
        const  mathOperations = ["*", "/", "+", "-"];

        if(!mathOperations.includes(operation)){
            return;
        }

        this.previousOperationText.innerText = 
        this.previousOperationText.innerText.slice(0, -1) + operation
    }
    // Delete this last digite
    processDelOperator(del){
        this.currentOperationText.innerText =
        this.currentOperationText.innerText.slice(0, -1)
    }
    // Delet this clear all operation
    processClearOperator(){
        this.currentOperationText.innerText =
        this.currentOperationText.innerText.slice(0, 0)
    }
    processClearAllOperator(){
        this.currentOperationText.innerText = 
        this.currentOperationText.innerText.slice(0, 0)
        this.previousOperationText.innerText =
        this.previousOperationText.innerText.slice(0, 0)
    }
    
}
const calc = new calculator (previousOperationText, currentOperationText);


buttons.forEach((btn) =>{
    btn.addEventListener("click", (e) =>{
        const value = e.target.innerText;

        if(+value >= 0 || value === "."){
            calc.addDigit(value);
        }else{
            calc.processOperation(value);
        }
    })
})

