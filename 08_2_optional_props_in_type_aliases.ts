// Optional properties while defining type aliases, so that while a variable is defined with this data type, the optional property can whether be defined or not.

type User = {
	name: string;
	email: string;
	phone?: string	// OPTIONAL prop
};

let newUser = {
	name: 'Tanjim',
	email: 'tanjim@gmail.com'
};

console.log(JSON.stringify(newUser));
