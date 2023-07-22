// [01] Variable that is uncertain of storing a value as number / string.
let score: number | string = 44;
console.log(`Score: ${score}`);
score = 'test score';
console.log(`Score: ${score}`);


// [02] Variable that is uncertain of storing a value as (custom data type) User / Admin.
type User = {
	name: string;
	id: number
};
type Admin = {
	username: string;
	adminId: number
}
let tanjim: User | Admin = {
	name: 'Tanjim',
	id: 20009
};
console.log(`Values of Tanjim: ${JSON.stringify(tanjim)}`);
tanjim = {
	username: 'tanjim840',
	adminId: 1031
}
console.log(`Values of Tanjim: ${JSON.stringify(tanjim)}`);
