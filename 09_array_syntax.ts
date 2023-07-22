// [01] Syntax of arrays in TypeScript
let superHeros: string[] = [];
superHeros.push('Sipderman');
superHeros.push('Hulk');
superHeros.push('Captain America');
superHeros.push('Superman');
superHeros.push('Black Panther');
console.log(`Super Heros: ${superHeros}`);

// [02] Syntax of arrays in TypeScript
let heroPowers: Array<number> = [];
heroPowers.push(4);
heroPowers.push(5);
heroPowers.push(3.6);
heroPowers.push(9);
heroPowers.push(6);
console.log(`Super heros powers: ${heroPowers}`);

// Use custom data type (type aliases) for the element of an array.
type User = {
	name: string;
	age: number
}

let listUsers: User[] = [];
listUsers.push({name: 'u1', age: 21});
listUsers.push({name: 'u2', age: 31});
listUsers.push({name: 'u3', age: 24});
listUsers.push({name: 'u4', age: 18});
console.log(`Users list: ${JSON.stringify(listUsers)}`);
