// NB: Order of the array can be governed by tuple, which cannot be done with a general array

// Specialized array, which hold different type of data as elem, but in a precise order
let user1: (string | number)[] = [1, 'hc']  // acceptable
let user2: (string | number)[] = ['hc', 1]  // acceptable

// But to preserve the ordering of array, use tuple
let user3: [string, number, boolean] = ['abir', 247, true];
// let user4: [string, number, boolean] = [247, 'abir', true];     // required to maintain the order

