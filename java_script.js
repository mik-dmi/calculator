const gridNumb = document.querySelector('.gridNumbers')
let aux = 1;
for (let i = 0; i < 16; i++) {
    
    const circle = document.createElement('button');
    circle.classList.add("buttons");
    circle.id = `units${i+1}`;
    gridNumb.appendChild(circle);
    circle.style['border-radius'] = '50%';
    circle.style.backgroundColor = 'red';
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