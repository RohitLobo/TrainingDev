document.addEventListener("DOMContentLoaded",
function(event){


    let nameInp=document.getElementById('butt');
    let header=document.querySelector('h1');
    // nameInp.onclick= display;
    nameInp.addEventListener('click',display);
    
    nameInp.innerHTML='Said it'
    
    document.querySelector("body").addEventListener("mousemove",function(event){
        if (event.shiftKey===true){
        console.log("x:"+ event.clientX);
        console.log("y:" + event.clientY);
        // if (event.shiftKey==true){
            
        // console.log("x:"+ event.clientX);
        // console.log("y:" + event.clientY);
        // }
        }
    })
    
    
    function display(event){
        let valeur=document.getElementById("name").value;
        console.log(event)
        
        if (valeur=='Rohit'){
            
            header.innerHTML=header.innerHTML+" " + 'student';
            document.getElementById("content").textContent=valeur;
    
        }
        else{
            header.innerHTML=header.innerHTML+" " + 'Teacher';
            document.getElementById("content").textContent=valeur;
    
        }
    
        
    
        
    }
    
    
    



});






