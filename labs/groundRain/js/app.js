/*
ground: 95, 99, 79
sky: 179, 205, 209
rain: 16, 37, 66
*/
var rainDrops = [];
var groundPuddle;
var wetness = 0.05;
var dropCount = 0;
var blueness = 0;

//ground hit box
// function groundHit( dropY, groundY, groundH){
//     if(dropY > groundY && dropY < groundY + groundH) {
//         return true;
//     }else{
//         return false;
//     }
// }


class droplet {
    //variables to create raindrop
    constructor(){
        this.x = (Math.random() * (745 - 51)) + 51;
        this.y = 25;
        this.v = 1 + Math.random() * 2;
        this.color = [16, 37, 66];
    }

    //rain
    rain(){
        this.y += this.v;
        this.v += 0.001;
        fill(this.color);
        rect(this.x, this.y, 5, 25, 5);

        if (this.y > 520) {
            this.y = 25;
            if(dropCount == 10){

                blueness ++;
                dropCount = 0;
    
            }
            dropCount++;
        }
    }
    
}

class ground {
    constructor(){
        this.x = 50;
        this.y = 450;
        this.w = 700;
        this.h = 100;
    }
    getsWet(){
        strokeWeight(0);
        fill(45, 69, blueness);


        console.log('blue', blueness);
        console.log('raindrops keep falling', dropCount);
        rect(this.x, this.y, this.w, this.h);
    }
    
}

function setup(){
    createCanvas(800, 600);
    background(179, 205, 209);

    groundPuddle = new ground();
    //create drops 
    for(i=0; i<500; i++){
        rainDrops.push(i);
        rainDrops[i] = new droplet();
    }
}
function sky(){
    fill(179, 205, 209);
    rect(50,0,700,50);
}


function draw(){
    // sky redraw
    fill(16, 37, 66);
    background(179, 205, 209);

    //rain
    for (var i = 0; i < 500; i++) {
        rainDrops[i].rain();
      }

    //ground 
    groundPuddle.getsWet();
    // make 5% blue-er on '79' 
    // fill(95, 99, 79);
    // rect(50, 450, 700, 100);
    
    //sky border
    sky();
    strokeWeight(0);

}
