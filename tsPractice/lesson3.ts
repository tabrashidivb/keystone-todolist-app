// ENUMS - a group of related constants that are important to program 
// If you dont specify a value they will use 0, 1, 2...
// Exists as an object at runtime, log the enum and it will print as obj 

enum EnemyState {
    SLEEPING = "sleeping",
    PATROLLING = "patrolling",
    FIGHTING = "fighting"
}
// Compare enums to regular constants, if they are related constants, its better to have enums 

// CONST ENUMS
const enum EnemyState1 {
    SLEEPING = "sleeping",
    PATROLLING = "patrolling",
    FIGHTING = "fighting"
}
// Replaces all references to enums to their literal values
// Not used very often


// Union Types
let y: "sleeping" | "patrolling" | "fighting" ; 

