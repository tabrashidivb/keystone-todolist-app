// Advanced Classes

// How can we make interfaces and classes work together?
interface GameObject1 {
    x: number;
    y: number;
    z: number;
} 

// Classes - what data you want objects to hold plus methods

// Game of players
// Fields are public by default 
// Classes must conform to interface
class Player3 implements GameObject1 {

    static playerCount = 0; // Used to store constants across all instances of the class or some shared data between all classes

    readonly x: number; // stops you from re-assigning it later, but this isn't the safest way to do it 
    y: number = 0;
    z = 0; // From inerface
    name: string;

    constructor(name: string) {
        this.name = name; 
        this.x = 0; 
        Player3.playerCount++; 
    }

    display(prefix: string) {
        console.log(this.name, this.x, this.y)
    } 
}

// instantiation
let p2 = new Player3("Tyler");
let p3 = new Player3("Fred");

let objects1: GameObject1[] = [p2, p3]; 