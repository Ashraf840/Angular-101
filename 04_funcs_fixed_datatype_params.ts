// Confine a function's params with defined data types
// Make the data type of func's-returned value as defined.

function userSignup(name: string, email: string, isLoggedIn: boolean) : string {
	console.log(`name: ${name}`);
	console.log(`email: ${email}`);
	if (isLoggedIn) {
		console.log(`User is logged in!`);
	}
	else {
		console.log(`User is not logged in!`);
	}
	return "Executed!";
}

let result = userSignup("Tanjim", "tanjim@doer.bd", true);	// Only string type value will be returned form the function
console.log(`Returened value: ${result}`);
