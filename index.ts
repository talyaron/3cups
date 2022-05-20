const cups = document.querySelectorAll('.cup');
const smile:HTMLElement =document.querySelector("#smile");
let target:string|false = false

cups.forEach(cup=> {
    cup.addEventListener('drop',(ev:any)=>{
        ev.preventDefault();
        console.log('drop')
        console.log(ev.target.id)
        target = ev.target.id;
        smile.style.display = 'none';
        
    })
    cup.addEventListener('dragover',(ev:any)=>{
        ev.preventDefault();
        console.log(ev.target.id)
        ev.dataTransfer.dropEffect = "move";
    })
    cup.addEventListener('click',(ev:any)=>{
        if(ev.target.id === target){
            console.log('correct')
        } else{
            console.log('worng')
        }
    })
 
})

smile.addEventListener('drop',(ev:any)=>{
    // ev.preventDefault();
    console.log(ev.target.id)
})

smile.addEventListener('dragstart',(ev:any)=>{
    ev.dataTransfer.dropEffect = "copy";
    // console.log(ev.target.id)
})

smile.addEventListener('drag',(ev:any)=>{
 
    // console.log(ev.target.id)
})