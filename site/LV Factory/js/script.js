$(function(){      //document.addEventListener('DOMContentLoaded',function(event){})


    $(".navbar-toggler").blur(function(event){                  //queryselector navbar
        var screenWidth=window.innerWidth;
        console.log(event)
        if (screenWidth< 768){
            $("#menu-toggler").collapse("hide");                //queryselector (menu toggler)
        }
    });


});


// let addBtn=document.getElementById("add");
// let subBtn=document.getElementById("subtract");
// var inpBtn=document.querySelector("input");

// addBtn.addEventListener('click',countIncrement);
// subBtn.addEventListener('click',countDecrement);




// function countIncrement(){
//     if (inpBtn.value <5){
//         inpBtn.value=parseInt(inpBtn.value,10)+1;
//     }
// }


// function countDecrement(){
//     if (inpBtn.value>0){
//         inpBtn.value=parseInt(inpBtn.value,10)-1;
//     }
    
// }

