window.addEventListener("DOMContentLoaded",function(event){

    
    
   document.querySelector("p").style.backgroundColor=colorSelector();
   
   
   function colorSelector(){
    let hexaNumbers='0123456789ABCDEF'
    let arr=[]
    for(let i=0;i<6;i++){
        let randomIndex=(Math.floor(Math.random()*(15-0)+ 0));
        // console.log(hexaNumbers[randomIndex])
        
        let colorSelect=hexaNumbers[randomIndex]
        arr.push(colorSelect);
        
    }
    
    let finalColor=arr.join("");
    return( ('#'+finalColor));
    }

    

});


        
