// [01] Pass objects of defined fields (key-value pair) through function params.
function createUser({name: string, isPaid: boolean}) {
	console.log(`Create a user here!`);
}
createUser({name: 'Tanjim', isPaid: true});  // Passing an object straightly into the argument won't highlight any error msg in the editor while writing code.

// createUser({name: 'Tanjim', isPaid: true, email: 'tanjim@gmail.com'});  // throws error, thus commented
// NB: Passing more props in an object while passing it straightly into the func's arg will throw error here, but it has a quirky behavior if we create that object separately with the same more props & then pass into the func's param, this won't throw any error.

let newUser = {name: 'Tanjim', isPaid: true, email: 'tanjim@gmail.com'};
createUser(newUser);  // this isn't suppose to happen, cause the 'email' prop isn't defined in the object's-props-definition in the function's param


// [02] Pass into & return an object from a function.
// Pass 'name', 'email' as object-props & get 'regId: string', 'isPaid: boolean', 'createdBy: string' as object-props in return
function createCourse({name: string, age: number}) : {regId: number, isPaid: boolean, createdBy: string} {
	return {regId: 14353, isPaid: true, createdBy: 'bot-2883'};
}

let jsonified_value = JSON.stringify(createCourse({name: 'Tanjim', age: 28}));
console.log(`Course registration result: ${jsonified_value}`);

