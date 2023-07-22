// Mutliple return types form a function

// Apply union type in the place of return types (number or string) from a function.
function getValue(usedId: number) : number | string {
        // Get an object from an API call & check if the user's score is more than or equal to 5.
        let fetchedUser = {
                username: 'u1',
                score: 4
        };
        //let fetchedUser = {};
        // if found the user then then there will be another check it, if not found the return '404 Not Found'.
        // Techniques of checking if the object is empty/not
        console.log(`Object Keys: ${Object.keys(fetchedUser)}`);
        console.log(`Object Keys-length: ${Object.keys(fetchedUser).length}`);
        // console.log(`Object Values: ${Object.values(fetchedUser).length}`);  // throws error, since it requires ts-compiler to target 'ECMAScript 2017 (ES2018)', which requires changes in the 'tsconfig.json' file, thus commented.
        console.log(`Object 'getOwnPropertyNames': ${Object.getOwnPropertyNames(fetchedUser)}`);
        console.log(`Object 'getOwnPropertyNames'-length: ${Object.getOwnPropertyNames(fetchedUser).length}`);
        if (Object.keys(fetchedUser).length === 0) {
                return `404 Not Found`;
        } else {
                if (fetchedUser.score >= 5) {
                        return fetchedUser.score;
                } else {
                        return `Score is less than 5`;
                }
                return '200 Ok';
        }
}
console.log(`User: ${getValue(1223)}`);
