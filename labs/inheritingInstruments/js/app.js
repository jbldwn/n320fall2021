
class Instrument{
    constructor(loudness){
        this.loudness = loudness;
    }
    jam(){
        console.log(`The ${this.type} section ${this.verb} at ${this.loudness} decibles.`)
    }
}

class wind extends Instrument{
    constructor(loudness){
        super(loudness);
        this.verb = 'flute';
        this.type = 'toots';
    }
}

class string extends Instrument{
    constructor(loudness){
        super(loudness);
        this.verb = 'plucks';
        this.type = 'violin';
    }
}

class percussion extends Instrument{
    constructor(loudness){
        super(loudness);
        this.verb = 'strikes';
        this.type = 'snare';
    }
}

let flute = new wind(60);
let violin = new string(50);
let snare = new percussion(70);

let sections = [flute, violin, snare];

let i = 0;


while(i<sections.length){
    sections[i].jam();
    // console.log('did it loop?');
    i++;
}
console.log(sections.length)

// flute.jam();
// violin.jam();
// snare.jam();