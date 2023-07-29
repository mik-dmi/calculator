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
    gridNumb.style.gridTemplateColumns = 'repeat(4, 98px)';
    gridNumb.style.gridTemplateRows = 'repeat(4, 95px)';
    /*adding the text content to the buttons*/
    const addButton = document.getElementById('units4');
    addButton.textContent = '+';
    const subButton = document.getElementById('units8');
    subButton.textContent = '-';
    const divButton = document.getElementById('units12');
    divButton.textContent = '/';
    const mulButton = document.getElementById('units16');
    mulButton.textContent = 'x';
    const decimalButton = document.getElementById('units13');
    decimalButton.textContent = '.';
    const zeroButton = document.getElementById('units14');
    zeroButton.textContent = '0';
    const equalButton = document.getElementById('units15');
    equalButton.textContent = '='; 
    equalButton.style.backgroundColor = "rgba(31, 31, 157, 0.848)";
}
/*---------------------------------------------------------------------------------*/
/*--------------------------------- Math ----------------------------------------- */
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
/* ---------------------------------------------------------------------------------*/ 

const gridNumb = document.querySelector('.gridNumbers');
const lowerDisplay = document.querySelector('.bottomDisplay');
const topDisplay = document.querySelector('.topDisplay');
const displayUp = document.querySelector('.topDisplay');
setButtons();
let firstInput = "0";
let secondInput = "";
let operationSign = "";


const buttons = document.querySelectorAll('.buttons');

buttons.forEach((selector)  => {
    
    return selector.addEventListener('click', ()=>{      
        if((parseFloat(selector.textContent) || selector.textContent == "0" || selector.textContent == "." ) && firstInput.length < 20 && secondInput.length < 20){
            if(operationSign != ""){
                secondInput = secondInput + selector.textContent;  
                mainDisplay(lowerDisplay,secondInput);
            }
            else{
                if(firstInput == 0) firstInput = ""; /*takes out the default 0*/
                firstInput = firstInput + selector.textContent;
                mainDisplay(lowerDisplay,firstInput);
            }
        
        }
        if(firstInput.length > 22 && secondInput.length > 22 || selector.textContent == "CLEAR"){
            clearScreen();
            
        }
        if(selector.textContent == "."){
            document.getElementById("units13").disabled = true;/*reset the "." button*/
        }
        if(selector.textContent == "="){
            result = computeMath(firstInput,secondInput,operationSign)
            mainDisplay(lowerDisplay,result.toString());
            displayUp.textContent = firstInput + operationSign +secondInput + selector.textContent ; 
        } 
        if( selector.textContent == "+" || selector.textContent == "-" ||
         selector.textContent == "/" || selector.textContent == "x"){
            if(secondInput != ""){    
                result = computeMath(firstInput,secondInput,operationSign);
                /*console.log("1 input = "+ firstInput + " Signal "+ operationSign+ " Second input "+ secondInput+ " Result = " + result);*/
                firstInput = result.toString();
                secondInput = "";  

            }      
        document.getElementById("units13").disabled = false;  /*reset the "." button*/
        operationSign = selector.textContent;  
        displayUp.textContent = firstInput + selector.textContent; 
        mainDisplay(lowerDisplay,firstInput);    
        }   
    });  
});


function mainDisplay(display, currentInput){
    display.textContent = currentInput ;
}  
function clearScreen(){
    firstInput = "0";
    secondInput = "";
    operationSign = "";
    displayUp.textContent = ""
    mainDisplay(lowerDisplay,"0");

} 


    



