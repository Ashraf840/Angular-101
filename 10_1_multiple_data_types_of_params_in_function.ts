// Make scope for passing user id as number or string through a param in function.

function getUser(id: number | string) {
	// Check if 'id' is passed as number / string
	if (typeof id === 'number') {
		console.log('id is passes as number');
		// make the (get-)API call
		return typeof id
	}

	if (typeof id === 'string') {
		// Convert to number (INT only) & then make the (get-)API call
		console.log('id is passes as string');
		let intId = parseInt(id);
		return typeof intId;
	}
	// Make API call & fetch the user
}
console.log(`Type of user id: ${getUser(1)}`);
