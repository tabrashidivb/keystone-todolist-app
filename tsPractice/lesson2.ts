// Null, Undefined Handling 

let player = null;

// Any variable that is unassigned is Undefined, this is probably a mistake rather than null.

// If you need to indicate a lack of some value, you probably should use Null

let nothinghere: null = null; 
let undef: undefined = undefined;

// Using a var before assigned TS will scream at you 

// FUNCTIONS 
// Define the arguement type in brackets
// Define return type after brackets
function testForMagicalNumber(num: number) : string {
    if(num === 5) {
        return "magic"
    }

    else return "not magic"
}

// NEVER TYPE a func will never return. Either throws an error or infinite loop 
function panic(): never {
    throw new Error("Bro check your code")
}

// Return Nothing, VOID JUST LIKE JAVA 
function draw(): void {

}


