window.addEventListener("DOMContentLoaded", function (event) {
    let mainSelector=document.querySelector("#main-container");
    let pSelector=document.querySelector("#text span");
    let authorSelector=document.querySelector("#author")
    let socialLinks=document.querySelector("#tweet-quote")
    let author=document.querySelector("#author")
    let newQuote=document.querySelector("#new-quote")
    let quotesSelect=document.querySelectorAll("#quotes")
    let hexaNumbers = '0123456789ABCDEF'
    
    



    

    const xhr = new XMLHttpRequest();
    xhr.onload = function () {

        let jsonTxt = this.responseText;
        if (this.status === 200) {
            try {
                let jsTxt = JSON.parse(jsonTxt);
                console.log('all goood');
                let objLength = (Object.keys(jsTxt).length);
                

               
                let i = 0;

                //function to generate random quotes+colors ;called when button is clicked.
                random = function () {
                    
                    //Random Quote generator
                    function randomQuote(){
                    while (i <= objLength) {
                        i = Math.floor(Math.random() * (objLength - 1 + 1))
                        let quotesAssign=(jsTxt['quotes' + i].quote);
                        let authorAssign='-'+ (jsTxt['quotes' + i].author);
                        pSelector.textContent=quotesAssign;
                        authorSelector.textContent=authorAssign;
                        return (pSelector.textContent,authorSelector.textContent)
                        }



                    }

                    
                    

                   

                ////Random color generator

                function randomColor() {
                    
                    let arr = []
                    for (let i = 0; i < 6; i++) {
                        let randomIndex = (Math.floor(Math.random() * (15 - 0) + 0));
                        
            
                        let colorSelect = hexaNumbers[randomIndex]
                        arr.push(colorSelect);
            
                    }
                    
                    let finalColor = arr.join("");
                    return (('#' + finalColor));
                }


                function randomCompColor(){
                    let backColor=root.style.getPropertyValue('--dynamicColor');
                    // let firstPair=backColor.substr(1,2);
                    
                    // let thirdPair=backColor.substr(5,6);
                    // let secondPair=backColor.substring(3,5);
                    // console.log(backColor,firstPair,secondPair,thirdPair)

                                       

                    

                }

                
            //function call for random color/quote/author and color assignement    
            
            randomQuote();
    
            let root = document.documentElement;
            root.style.setProperty('--dynamicColor',randomColor())
            randomCompColor();
            


            

            }

            //End of random function 

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




