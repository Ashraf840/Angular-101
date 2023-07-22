// Define fixed data type of params of functions.
// Thus, it'll confine the behavior of the params inside the functions.

// [01] A function that takes only string value to make it in uppercase after removing any special characters from the value & return as a string.
function normalizedStringUppercase(val: string) {
	// Instead of using the 'RegExp()' construtor, use the regular expression literal consists of pattern enclosed between slashes will hit the permormance of the script.
	const alnum = /[^a-zA-Z0-9 ]/g;
	let normalizedVal = val.replace(alnum, '');
	let normalizedValUpper = normalizedVal.toUpperCase();
	return normalizedValUpper;
}
console.log(`Normalized string uppercase: ${normalizedStringUppercase('T^an&j*i@m#$%')}`);
//console.log(`${normalizedStringUppercase(2345)}`);  // throws error, thus commented


// [02] A function that takes only number (fractional) to round that number to a given number of digits & return as a 'number' data type. Set a default value of 0 to 'num_of_digits' if no args is passed to that param.
function roundNumber(val: number, num_of_digits: number = 0) : number {
	return Number(val.toFixed(num_of_digits));
}
//console.log(`${roundNumber('test')}`);  // throws error, thus commented
console.log(`Rounded a fractional number (6.87686) to 0-decimal-digit: ${roundNumber(6.87686)}`);
console.log(`Rounded a fractional number (6.87686) to 1-decimal-digit: ${roundNumber(6.87686, 1)}`);
console.log(`Rounded a fractional number (6.87686) to 2-decimal-digits: ${roundNumber(6.87686, 2)}`);
console.log(`Rounded a fractional number (6.87686) to 3-decimal-digits: ${roundNumber(6.87686, 3)}`);


// [03] A function that takes only boolean value & returns the primitive value of it in string data type.
function boolValue(val: boolean) : string {
	let value = String(val.valueOf());
	console.log(`Type-check after onverting to string: ${typeof(value)}`);
	return value;
}
//console.log(`${boolValue('test')}`);  // throw error, thus commented
console.log(`Value of the boolean in string-format: ${boolValue(true)}`);


// [04] A void function that won't return anything.
function voidFunction() : void {
	console.log("This is a void function that won't return anything from the function, but any kind of value can be passed to this function through params. It'll throw an error if any other dev wants to return anything from this function");
	// return 1;  // throws error, thus commented
}
console.log(voidFunction());  // Will depict "undefined"
