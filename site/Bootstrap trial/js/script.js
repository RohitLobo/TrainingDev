$(window).ready(function() {
    $("#cookie-button button").click(function(event){
        $("#cookie-container").hide();

    });
   
    // $("#loading-prog").append($("#loading-prog").width())
     
    
    var loadBar=document.querySelector("#loading-prog")
    loadBar.style.width='1%';
    
    
    var widthAug=0;
    function loadBarAnime(){
        console.log('start')
        
        var loadBarWidth= loadBar.clientWidth;
        var loadBarWidthPerc=Math.floor(loadBarWidth*0.410) +'%'
        if(widthAug>100){
            console.log('end')
        }
        else{
            widthAug++;
            loadBar.style.width=widthAug +'%';
            loadBar.innerHTML=loadBarWidthPerc;
            
        }
        

    }
    
    setInterval(loadBarAnime,50);
    
  



});
 