// How can we make interfaces and classes work together?
interface GameObject {
    x: number;
    y: number;
    z: number;
} 

// Classes - what data you want objects to hold plus methods

// Game of players
// Fields are public by default 
// Classes must conform to interface
class Player implements GameObject {
    x: number;
    y: number = 0;
    z = 0; // From inerface
    name: string;

    constructor(name: string) {
        this.name = name; 
        this.x = 0; 
    }

    display(prefix: string) {
        console.log(this.name, this.x, this.y)
    } 
}

// instantiation
let p = new Player("Tyler");
let p1 = new Player("Fred");

let objects: GameObject[] = [p, p1]; 