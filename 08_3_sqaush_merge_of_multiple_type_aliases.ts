// Merge multiple type aliases to create an aggregated type alias.

type User = {
	name: string;
	email: string;
};

type UserProfile = {
	phone?: string;
	age: number;
	gender: string;
};

//type UserDetail = User & UserProfile;
type UserDetail = User & UserProfile & {NID: string};  // Hacky way of adding new prop while defining a variable of same time. Regardless of whether the new prop is added or not, TypeScript still will 
let newUserDetail = {
	name: 'Tanjim',
	email: 'tanjim@gmail.com',
	age: 28,
	gender: 'Male',
};
console.log(JSON.stringify(newUserDetail));
