$(window).ready(function() {
    $("#cookie-button button").click(function(event){
        $("#cookie-container").hide();
        $("#popupcard").show();

        var loadBar=document.querySelector("#loading-prog")
        var widthAug=0;
        loadBar.style.width='1%';
       
        
        
        
        function loadBarAnime(){
            
            
            var loadBarWidth= loadBar.clientWidth;
            var loadBarWidthPerc=Math.floor(loadBarWidth*0.410) +'%'
            if(widthAug>100){
                $("#popupcard").hide();
                
            }
            else{
                widthAug++;
                loadBar.style.width=widthAug +'%';
                loadBar.innerHTML=loadBarWidthPerc;
                
                
            }
            
    
        }
        
        setInterval(loadBarAnime,50);






    });
   
    // $("#loading-prog").append($("#loading-prog").width())
     
    
    
   
    
    
  



});
 