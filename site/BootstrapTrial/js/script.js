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
        
        setInterval(loadBarAnime,75);

        

        




    });

    

        document.querySelector("#submit-btn").addEventListener('click', function(event){
                var inpMail=document.querySelector("#InputEmail").value
                var inpPass=document.querySelector("#InputPassword").value
                if((inpPass=='') || (inpMail="")){
                    window.alert("Make sure the email and password fields are completed")
                }
        });
    
        

        const xhr=new XMLHttpRequest();
        
        xhr.onload= function(){
            
            if(this.status===200){
                try{
                    const resObj=JSON.parse(this.response)
                    console.log(resObj.name);
                }
                catch(err){
                    console.warn("error in parsing data")
                }
                
            }
            else{
            
                console.warn("Error retrieving page")
            }
        }

        xhr.open("get",'data.json');
        xhr.send();

        


    // $("#loading-prog").append($("#loading-prog").width())
     
    
    
   
    
    
  



});
 