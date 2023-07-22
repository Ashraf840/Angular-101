// Type aliases: to avoid defining massive amount of object-props into function's arguments, using type aliases is much convenient.

type User = {
	name: string;
	email: string;
	age: number;
	phone: string;
	nationality: string;
	address: string
};

type UserRegResult = {
	regId: number;
	name: string;
	isPaid: boolean
}

function createUser(user: User) : UserRegResult {
	//console.log(`User name: ${user.name}`);
	return {regId: 2837, name: `${user.name}`, isPaid: true};
}
let result_jasonified = JSON.stringify(createUser({
	name: 'Tanjim', email: 'tanjim@gmail.com', age: 28, 
	phone: '12398762348', nationality: 'Bangladeshi', address: 'test-address'
}));
console.log(`User creation result: ${result_jasonified}`);

