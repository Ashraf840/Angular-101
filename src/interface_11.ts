import { User } from "./interface_10"


// Inheritance: Using the extends keyword
interface Admin extends User {
    role: 'admin' | 'ta' | 'learner'
}

let usr2: Admin = {
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
    role: "admin",
};
console.log(usr2);

