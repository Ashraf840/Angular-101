// Where not to use TypeScript's automatic type-inference.
/*
let hero;
function getHero() {return "Aquaman";}
hero = getHero();
console.log(`Hero: ${hero}`);
*/

// In the code above, not explicitly mentioning the data type to var "Hero" might cause other devs to return a boolean/number value from the func "getHero()" & assign to the var "Hero". Thus it'll disrupt the integrity of the further development.

let hero: string;	// other than a "string" value cannot be assigned to this variable.
// function getHero() {return true}	// Throws error: Type 'boolean' is not assignable to type 'string'.

// hero = () => {return 324876243.4587};  // Throws error: Type '() => number' is not assignable to type 'string'.
// hero = () : string => {return "Thor"};	// Since the var "hero" will only except string type var

function getHero() {
	return "Thor";
}
hero = getHero();
console.log(`Hero:`, hero);
