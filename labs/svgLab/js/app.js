class Game{
    foundCircles = 0;
    totalWinningCircles = 0;
    totalCircles = 50;
    searchColor = "#99ff00";
    normalColor = "#7700AA";
    gameZone = document.getElementById("gameZone");
    foundBar = new FoundBar();

    constructor(){
        //make circles
        for(var i = 0; i < this.totalCircles; i++){
            //create circle
            let newCirc = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            
            //circle style class
            newCirc.classList.add("gameCirc");
            newCirc.setAttribute("cx", Math.random() * 400);
            newCirc.setAttribute("cy", Math.random() * 400);

            //randomly choose revealed color is
            if(Math.random() < .3){
                newCirc.dataset.hiddenColor = this.searchColor;
                this.totalWinningCircles ++;
            }else{
                newCirc.dataset.hiddenColor = this. normalColor;
            }

            //mouse events
            //reveal hidden color on mouse over
            newCirc.addEventListener("mouseover", (event) => {
                event.target.style.fill = event.target.dataset.hiddenColor;
            })

            //hide revealed color on mouse out
            newCirc.addEventListener("mouseout", (event) => {
                event.target.style.fill = "#000";
            })

            
            newCirc.addEventListener("click", (event) => {

                //if user clicks winning color
                if(event.target.dataset.hiddenColor == this.searchColor){
                    event.target.remove();

                    //store winning circles
                    this.foundCircles++;

                    //update the foundBar
                    this.foundBar.setPercent(this.foundCircles / this.totalWinningCircles)
                }
            })

            //add circle to screen
            this.gameZone.appendChild(newCirc);
        }
    }
}

class FoundBar{
    element = document.getElementById("foundBar");
    maxSize = 130;
    percent = 0;
    setPercent(percent){
        this.percent = percent;
        this.element.setAttribute("width", this.percent * this.maxSize);
    }
}



let g = new Game();