// Readonly properties of type aliases; once this readonly prop(s) are defined, it can't be modified further down the road.

type User = {
	readonly _id: string;
	name: string;
	email: string;
	age: number;
	isActive: boolean
};

let newUser = {
	_id: 'id-23009',
	name: 'Tanjim',
	email: 'tanjim@gmail.com',
	age: 28,
	isActive: true
};

newUser._id = 'id-23010';  // throws error; thus commented; can't change READONLY property
// NB: Currently TypeScript converts this LOC without throwing error, but later it can be halte by defining the tsconfig file.
console.log(`New User: ${JSON.stringify(newUser)}`);

