// Specialized array, which hold different type of data as elem, but in a precise order
var user1 = [1, 'hc']; // acceptable
var user2 = ['hc', 1]; // acceptable
// But to preserve the ordering of array, use tuple
var user3 = ['abir', 247, true];
// let user4: [string, number, boolean] = [247, 'abir', true];     // required to maintain the order
