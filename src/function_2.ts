/*
 * Type annotation is optional while using using variables, but it's compulsary while using functions to avoid unnecessary probable errors in future.
 */


function addNum(num: number) {
    return num + 2
}
console.log("addNum():", addNum(5));


function getUpper(val: string) {
    return val.toUpperCase()
}
console.log("getUpper():", getUpper("Tanjim"));


// Default value to param
function signup(username: string, email: string, isPaid: boolean = false) {
    if (isPaid) {
        console.log(`Congratulation "${username}"! You've successfully signed up for this paid course!`);
    } else {
        console.log(`Congratulation "${username}"! You've successfully signed up for this free course!`);
    }
}
signup("TanjimAshraf", 'tanjim@gmail.com', true);


// Define the return type of the function
function getName(): string {
    return "Cannot return any other type rather than a string!"
}
console.log(getName());


// Arrow function
let getHellow = (name: string): string => `Hello ${name}`;
console.log(getHellow("Tasnim"));


console.log();


// [Array Map] TypeScript is smart enough to know the type of each elem from the array
const heros = ["Thor", "Spirderman", "Superman"];
heros.map((hero: string): void => {    // Not returning anything from this map function
    console.log(hero);
});


// Idea behind this method: Whatever is passed into it, log it into the console
function consoleError(errMsg: string): void {
    console.log(errMsg);
}


// Idea behind this method: Never returns a value but handle error/crash gracefully
function handleError(errMsg: string): never {
    throw new Error(errMsg);
}