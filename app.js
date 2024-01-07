
const keys = document.querySelectorAll('.key')
const screen = document.querySelector('.screen');
for(let key of keys){
    key.addEventListener('click',(e)=>{
        const keyText = e.target.innerText;
        console.log(keyText);
        if(keyText==='C'){
            screen.value='';
        }
        else if(keyText==='^'){
            screen.value += '**';
        }
        else if (keyText==='D'){
            screen.value = screen.value.slice(0,screen.value.length-1);
        }
        else if(keyText === '='){
            try{
            screen.value = eval(screen.value);
            }
            catch(err){
                screen.value = "Invalid Operation"
            }
        }
        else{
            screen.value += keyText;
        }
    })
}