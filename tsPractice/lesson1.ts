let bar = 2; 

// Better to let TSC know the type of something 
let isHungry: boolean = false;
let bar1: number = 2; 
let feeling: string = "good"; 
let feelings: string[] = ["good", "mad", "happy"]; 

//Tuple : Specific type of Array 

let studentScore: [string, number] = ["Tom", 97.5]; 

// Array of tuples
let allStudentScore: [string, number][] = [["Lucy", 90], ["Jeff", 82]]

// Objects 
type Player1 = {
    x: number,
    y: number, 
    health: number
}

// Similarly Inteface 
interface Player2 {
    x: number,
    y: number, 
    health: number
}

// How to use objects 

let player_1_obj: Player1 = {
    x: 1, y: 2, health: 80
}

let player_2_obj: Player2 = {
    x: 1, y: 2, health: 80
}

// Using libraries
// This variable can be many types, hover over getElementById it shows null so we add another type here. We call this a union type
let element: HTMLElement | null = document.getElementById("div1"); 

// Catch all types, we don't usually use it. We opt out of all checks that TS does for u, then whats the point of TS just use JS   
let obj: object = player_2_obj; 
let something: any = 1; 

