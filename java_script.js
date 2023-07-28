/*------------------------Make the buttons in the html---------------------------*/
function setButtons(){
    let aux = 1;
    /*making the grid*/
    for (let i = 0; i < 16; i++) { 
        const circle = document.createElement('button');
        circle.classList.add("buttons");
        circle.id = `units${i+1}`;
        gridNumb.appendChild(circle);
        circle.style['border-radius'] = '50%';
        circle.style['border-color'] = 'white';
        circle.style['border-style'] = 'hidden double dashed';
        circle.style['border-width'] = 'thin'
        if(i < 3 || i < 7 && i >3 || i < 11 && i >7){
            circle.textContent =  aux;
            aux++;
            if(i === 3 ) aux = 1;
        }     
    } 
    gridNumb.style.gridTemplateColumns = 'repeat(4, 108px)';
    gridNumb.style.gridTemplateRows = 'repeat(4, 110px)';
    /*adding the text content to the buttons*/
    const addButton = document.getElementById('units4');
    addButton.textContent = '+';
    const subButton = document.getElementById('units8');
    subButton.textContent = '-';
    const divButton = document.getElementById('units12');
    divButton.textContent = '/';
    const mulButton = document.getElementById('units16');
    mulButton.textContent = 'x';
    const decimalButton = document.getElementById('units15');
    decimalButton.textContent = '.';
    const zeroButton = document.getElementById('units14');
    zeroButton.textContent = '0';
    const clearButton = document.getElementById('units13');
    clearButton.textContent = 'C';    
}
/*---------------------------------------------------------------------------------*/


const gridNumb = document.querySelector('.gridNumbers');
setButtons();

let firstInput = "0";
let secondInput = "";
let digit = "";
let userInputs = [];
let count = 0;
let operationSign = "";

const buttons = document.querySelectorAll('.buttons');

buttons.forEach((selector)  => {
    return selector.addEventListener('click', ()=>{      
        if(parseFloat(selector.textContent)){
            (operationSign != "") ? secondInput = secondInput + selector.textContent : firstInput = firstInput + selector.textContent;
        }
        if( selector.textContent == "+" || selector.textContent == "-" ||
         selector.textContent == "/" || selector.textContent == "x"|| selector.textContent == "=" ){
            if(secondInput != ""){
                result = computeMath(firstInput,secondInput,operationSign);
                console.log("1 input = "+ firstInput + " Signal "+ operationSign+ " Second input "+ secondInput+ " Result = " + result);
                firstInput = result;
                console.log(result)
                secondInput = "";                
            }
        operationSign = selector.textContent;       
        }
        });  
});


function computeMath(firstNumb,secondNumb,sign){
    switch(sign){
        case "+":
            return parseFloat(firstNumb) + parseFloat(secondNumb);
        case "-":
            return parseFloat(firstNumb) - parseFloat(secondNumb);
        case "x":
            return parseFloat(firstNumb) * parseFloat(secondNumb);
        case "/":
            return parseFloat(firstNumb) / parseFloat(secondNumb);
    }
}
   
    
    



