function welcomePerson(person) {
    console.log(person.fn, person.ln);
    return "Hey";
}
var james = {
    fn: "james",
    ln: "noob"
};
welcomePerson(james);
