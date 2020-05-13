let addBtn=document.getElementById("add");
let subBtn=document.getElementById("subtract");
var inpBtn=document.querySelector("input");

addBtn.addEventListener('click',countIncrement);
subBtn.addEventListener('click',countDecrement);




function countIncrement(){
    if (inpBtn.value <5){
        inpBtn.value=parseInt(inpBtn.value,10)+1;
    }
}


function countDecrement(){
    if (inpBtn.value>0){
        inpBtn.value=parseInt(inpBtn.value,10)-1;
    }
    
}

