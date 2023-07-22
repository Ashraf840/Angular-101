// Return a specific value based on condition form Array using map-function.
// If we want to confine the return type of the value from the map function, then we need to define the data type of both the parameter along with the func-return-data-type al together. 


let user = ['Polash', 'Rakib', 'Ratin'];

// console.log(`User: ${user}`);

let RatinFound = user.map((x: string) : boolean => x === "Ratin" ? true : false);

if (RatinFound) {
	console.log(`Ratin is found!`);
} else {
	console.log(`Ratin is not found!`);
}
