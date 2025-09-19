const display=document.getElementById('display')
const resultDisplay=document.getElementById('resultDisplay')
function appendToDisplay(input){
    resultDisplay.value='';
    display.value+=input;
   
    
}

function clearDisplay(){
    display.value='';
    resultDisplay.value='';
   
}
function calculate(){
    resultDisplay.value=eval(display.value);
    
    
}
function squareRoot(){
    display.value=Math.sqrt(display.value);
    calculate()
}
display.value='';

function backspace(){
    currentvalue=display.value;
    if(currentvalue.length>0){
        display.value=currentvalue.substring(0,currentvalue.length-1);
    }
}
document.addEventListener('keypress', function(event){
   
    const pressedKey=event.key;
    
    switch (pressedKey){
        case '1':
            appendToDisplay(pressedKey)
document.getElementById('one').style.backgroundColor = 'blue';
document.getElementById('one').style.borderBlockColor = 'white';
document.getElementById('one').style.color = 'white';
setTimeout(()=>{document.getElementById('one').style.backgroundColor = '';document.getElementById('one').style.borderBlockColor = '';document.getElementById('one').style.color = '';
;},150);

            break;
        case '2':
            appendToDisplay(pressedKey)
            document.getElementById('two').style.backgroundColor = 'blue';
document.getElementById('two').style.borderBlockColor = 'white';
document.getElementById('two').style.color = 'white';
setTimeout(()=>{document.getElementById('two').style.backgroundColor = '';document.getElementById('two').style.borderBlockColor = '';document.getElementById('two').style.color = '';
;},150);
            break;
        case '3':
            appendToDisplay(pressedKey)
             document.getElementById('three').style.backgroundColor = 'blue';
document.getElementById('three').style.borderBlockColor = 'white';
document.getElementById('three').style.color = 'white';
setTimeout(()=>{document.getElementById('three').style.backgroundColor = '';document.getElementById('three').style.borderBlockColor = '';document.getElementById('three').style.color = '';
;},150);
            break;
        case '4':
            appendToDisplay(pressedKey)
             document.getElementById('four').style.backgroundColor = 'blue';
document.getElementById('four').style.borderBlockColor = 'white';
document.getElementById('four').style.color = 'white';
setTimeout(()=>{document.getElementById('four').style.backgroundColor = '';document.getElementById('four').style.borderBlockColor = '';document.getElementById('four').style.color = '';
;},150);
            
            break;
        case '5':
            appendToDisplay(pressedKey)
             document.getElementById('five').style.backgroundColor = 'blue';
document.getElementById('five').style.borderBlockColor = 'white';
document.getElementById('five').style.color = 'white';
setTimeout(()=>{document.getElementById('five').style.backgroundColor = '';document.getElementById('five').style.borderBlockColor = '';document.getElementById('five').style.color = '';
;},150);
            break;
        case '6':
            appendToDisplay(pressedKey)
             document.getElementById('six').style.backgroundColor = 'blue';
document.getElementById('six').style.borderBlockColor = 'white';
document.getElementById('six').style.color = 'white';
setTimeout(()=>{document.getElementById('six').style.backgroundColor = '';document.getElementById('six').style.borderBlockColor = '';document.getElementById('six').style.color = '';
;},150);
            break;
        case '7':
            appendToDisplay(pressedKey)
             document.getElementById('seven').style.backgroundColor = 'blue';
document.getElementById('seven').style.borderBlockColor = 'white';
document.getElementById('seven').style.color = 'white';
setTimeout(()=>{document.getElementById('seven').style.backgroundColor = '';document.getElementById('seven').style.borderBlockColor = '';document.getElementById('seven').style.color = '';
;},150);
            break;
        case '8':
            appendToDisplay(pressedKey)
             document.getElementById('eight').style.backgroundColor = 'blue';
document.getElementById('eight').style.borderBlockColor = 'white';
document.getElementById('eight').style.color = 'white';
setTimeout(()=>{document.getElementById('eight').style.backgroundColor = '';document.getElementById('eight').style.borderBlockColor = '';document.getElementById('eight').style.color = '';
;},150);
            break;
        case '9':
            appendToDisplay(pressedKey)
             document.getElementById('nine').style.backgroundColor = 'blue';
document.getElementById('nine').style.borderBlockColor = 'white';
document.getElementById('nine').style.color = 'white';
setTimeout(()=>{document.getElementById('nine').style.backgroundColor = '';document.getElementById('nine').style.borderBlockColor = '';document.getElementById('nine').style.color = '';
;},150);
            break;
        case '0':
            appendToDisplay(pressedKey)
             document.getElementById('zero').style.backgroundColor = 'blue';
document.getElementById('zero').style.borderBlockColor = 'white';
document.getElementById('zero').style.color = 'white';
setTimeout(()=>{document.getElementById('zero').style.backgroundColor = '';document.getElementById('zero').style.borderBlockColor = '';document.getElementById('zero').style.color = '';
;},150);
            break;

        case '*':
            appendToDisplay(pressedKey)
             document.getElementById('mul').style.backgroundColor = 'blue';
document.getElementById('mul').style.borderBlockColor = 'white';
document.getElementById('mul').style.color = 'white';
setTimeout(()=>{document.getElementById('mul').style.backgroundColor = '';document.getElementById('mul').style.borderBlockColor = '';document.getElementById('mul').style.color = '';
;},150);
            break;
        case '/':
            appendToDisplay(pressedKey)
             document.getElementById('dive').style.backgroundColor = 'blue';
document.getElementById('dive').style.borderBlockColor = 'white';
document.getElementById('dive').style.color = 'white';
setTimeout(()=>{document.getElementById('dive').style.backgroundColor = '';document.getElementById('dive').style.borderBlockColor = '';document.getElementById('dive').style.color = '';
;},150);
            break;
        case '%':
            appendToDisplay(pressedKey)
             document.getElementById('per').style.backgroundColor = 'blue';
document.getElementById('per').style.borderBlockColor = 'white';
document.getElementById('per').style.color = 'white';
setTimeout(()=>{document.getElementById('per').style.backgroundColor = '';document.getElementById('per').style.borderBlockColor = '';document.getElementById('per').style.color = '';
;},150);
            break;
        case '-':
            appendToDisplay(pressedKey)
             document.getElementById('three').style.backgroundColor = 'blue';
document.getElementById('sub').style.borderBlockColor = 'white';
document.getElementById('sub').style.color = 'white';
setTimeout(()=>{document.getElementById('sub').style.backgroundColor = '';document.getElementById('sub').style.borderBlockColor = '';document.getElementById('sub').style.color = '';
;},150);
            break;
        case '+':
            appendToDisplay(pressedKey);
             document.getElementById('add').style.backgroundColor = 'blue';
document.getElementById('add').style.borderBlockColor = 'white';
document.getElementById('add').style.color = 'white';
setTimeout(()=>{document.getElementById('add').style.backgroundColor = '';document.getElementById('add').style.borderBlockColor = '';document.getElementById('add').style.color = '';
;},150);
            break;
       
        case 'Enter':
            calculate(pressedKey);
             document.getElementById('equal').style.backgroundColor = 'orangered';
document.getElementById('equal').style.borderBlockColor = 'white';
document.getElementById('equal').style.color = 'white';
setTimeout(()=>{document.getElementById('equal').style.backgroundColor = '';document.getElementById('equal').style.borderBlockColor = '';document.getElementById('equal').style.color = '';
;},150);
            break;
             case '=':

            calculate(pressedKey);
            document.getElementById('equal').style.borderBlockColor = 'white';
document.getElementById('equal').style.color = 'white';
setTimeout(()=>{document.getElementById('equal').style.backgroundColor = '';document.getElementById('equal').style.borderBlockColor = '';document.getElementById('equal').style.color = '';
;},150);
            break;
        case 'Delete':
            
            clear(pressedKey);
             document.getElementById('clear').style.backgroundColor = 'blue';
document.getElementById('clear').style.borderBlockColor = 'white';
document.getElementById('clear').style.color = 'white';
setTimeout(()=>{document.getElementById('clear').style.backgroundColor = '';document.getElementById('clear').style.borderBlockColor = '';document.getElementById('clear').style.color = '';
;},150);
            break;
    }
})
document.addEventListener('keydown', function(event){
    const backs=event.key;
    const deleteDisplay=event.key;
    if(backs==='Backspace'){
        backspace()
         document.getElementById('backspace').style.backgroundColor = 'rgb(240, 191, 100);';
document.getElementById('backspace').style.borderBlockColor = 'white';
document.getElementById('backspace').style.color = 'red';
setTimeout(()=>{document.getElementById('backspace').style.backgroundColor = '';document.getElementById('backspace').style.borderBlockColor = '';document.getElementById('backspace').style.color = '';
;},150);
        
    }
    if(deleteDisplay==='Delete'){
        clearDisplay()
document.getElementById('clearDisplay').style.backgroundColor = 'orangered';
document.getElementById('clearDisplay').style.borderBlockColor = 'white';
document.getElementById('clearDisplay').style.color = 'white';
setTimeout(()=>{document.getElementById('clearDisplay').style.backgroundColor = '';document.getElementById('clearDisplay').style.borderBlockColor = '';document.getElementById('clearDisplay').style.color = '';
;},150);
    }
})
document.addEventListener('focus',()=>{
    display.blur();
    resultDisplay.blur()
});
