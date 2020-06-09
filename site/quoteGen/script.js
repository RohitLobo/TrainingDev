window.addEventListener("DOMContentLoaded", function (event) {
    let mainSelector=document.querySelector("#main-container");
    let pSelector=document.querySelector("#text span");
    let socialLinks=document.querySelector("#tweet-quote")
    let author=document.querySelector("#author")
    let newQuote=document.querySelector("#new-quote")
    let quotesStart=document.querySelector("#quotesStart");
    let quotesEnd=document.querySelector("#quotesEnd");
    
    
    


    

    const xhr = new XMLHttpRequest();
    xhr.onload = function () {

        let jsonTxt = this.responseText;
        if (this.status === 200) {
            try {
                let jsTxt = JSON.parse(jsonTxt);
                console.log('all goood');
                let objLength = (Object.keys(jsTxt).length);
                

               
                let i = 0;
                //function to generate random quotes+ colors ;called when button is clicked.
                random = function () {
                    
                    //Random Quote generator
                    function randomQuote(){
                    while (i <= objLength) {
                        i = Math.floor(Math.random() * (objLength - 1 + 1))
                        
                        // return (jsTxt['quotes' + i]);
                        return pSelector.textContent=(jsTxt['quotes' + i]);

                    }



                }

                ////Random color generator

                function randomColor() {
                    let hexaNumbers = '0123456789ABCDEF'
                    let arr = []
                    for (let i = 0; i < 6; i++) {
                        let randomIndex = (Math.floor(Math.random() * (15 - 0) + 0));
                        
            
                        let colorSelect = hexaNumbers[randomIndex]
                        arr.push(colorSelect);
            
                    }
            
                    let finalColor = arr.join("");
                    return (('#' + finalColor));
                }
            //function calls    
            mainSelector.style.backgroundColor=randomColor(); 
            randomQuote();  
            pSelector.style.color= mainSelector.style.backgroundColor;
            socialLinks.style.color= mainSelector.style.backgroundColor;
            author.style.color= mainSelector.style.backgroundColor;
            newQuote.style.backgroundColor= mainSelector.style.backgroundColor;
            quotesStart.style.color= mainSelector.style.backgroundColor;
            quotesEnd.style.color= mainSelector.style.backgroundColor;

            }


                let btnSelector = document.querySelector("#new-quote")         
                btnSelector.addEventListener("click",random);
                
                
                
                    
                

            }



            catch (err) {
                console.warn("parsing error")
            }
        
        }
        else {
            console.warn('No can do');
        }



    }

    xhr.open("get", "data.json");
    xhr.send();

    
                
    

});




