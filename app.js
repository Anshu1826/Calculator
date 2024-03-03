const keypad = document.querySelector('.keypad');
const screen = document.querySelector('.screen');
const keys = document.querySelectorAll('.key');
for(let key of keys){
    key.addEventListener('click',(e)=>{
        const keyText = e.target.innerText;
        console.log(keyText);
        console.log(e.keyCode);
        if(keyText==="AC")
        screen.value="";
        else if(keyText==="D")
        screen.value=screen.value.slice(0,screen.value.length-1);
        else if(keyText==="+/-")
        screen.value=-1*screen.value;
        else if(keyText==="X")
        screen.value=screen.value+'*';
        else if(keyText==="="){
            try{
                screen.value=eval(screen.value);
            }
            catch(err){
                screen.value = "Invalid Operation";
            }
        }
        else
        screen.value+=keyText;
    })
}
