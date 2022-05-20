// INTERFACES 
// Objects conform to programmer expectations 
// Interfaces do not compile into JS but created objects from interfaces will show up

interface User {
    name: string, 
    firstVisit: Date, 
    role: "admin" | "manager" | "employee"
}

let u: User = {
    name: "Tyler", 
    firstVisit: new Date(),
    role: "admin"
}

// INTERFACE BASED ON OTHER INTERFACE 
// Can overide e.g. role
// Can declare a function but not implementation
// Define optional properties ? CAN ONLY BE YOUR TYPE OR UNDEFINED, not NULL unless you add it to type
interface AdminUser extends User {
    access: string[];
    role: "admin"
    logName(firstName: string): string;
    jobTitle?: string | null
}

// Impl is done down here
let u3: AdminUser = {
    name: "Tyler", 
    firstVisit: new Date(),
    role: "admin",
    access: ["create post"],
    logName(firstName: string) {
        console.log(firstName);
        return firstName; 
    },
    jobTitle: "worker"
}


// READONLY 
interface ReadOnlyUser {
    readonly name: string, 
    readonly firstVisit: Date, 
    readonly role: "admin" | "manager" | "employee"
}


// TS will guaruntee to have at LEAST what you specify 


// Object that stores other objects INDEX PROPERTIES
interface MapOfUsers {
    [id: string]: User; // id is how we reference the object we want to index, and User is the return type

}
let m: MapOfUsers = {
    tyler: u,
    james: u3, 
    kyler: {
        name: "Kyler", 
        firstVisit: new Date(),
        role: "manager",
    }
}

// Not usually used, but used when composite objects are needed 
type OtherUser = {name: string}
let u2: OtherUser = {name: "?"}

