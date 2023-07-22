// Data type annotations in both function-returned value & its parameters
// Default value in params.
// Single returned-type from a function.


let userSignup = (name: string, age: number, isReg: boolean = false) : boolean => {
	if (isReg) {
		console.log(`${name}, you are successfully registered!`);
		return true;
	} else {
		console.log(`${name}, you are not registered!`);
		return false;
	}
};

let result = userSignup('Polash', 86, true);

console.log(`User registration result: ${result}`);

//let u: string = null;
//console.log(`Value of "u": ${u}`);

