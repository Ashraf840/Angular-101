// Similar to type in typescript, but interface can hold methods as well
export interface User {
    readonly dbId: number;
    email: string;
    userId: number;
    googleId?: string | number;
    // starTrail: () => string;    // way of defining a method in interface-1
    startTrail(): string;          // way of defining a method in interface-2 
    getCoupon(couponName: string): number;
}

let usr: User = {
    dbId: 4564,
    email: 't@t.com',
    userId: 74,
    googleId: 'gid-5664',
    startTrail: () => {     // way-1
        return "Trail started!"
    },
    getCoupon(couponName) { // way-2
        return 10
    },
    githubToken: 'gh-785457',
};
console.log(usr);


// Reopening of an interface / extending an interface
export interface User {
    githubToken?: string;
}

