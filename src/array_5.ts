// Array w/ single type elem
let arr_1: Array<string> = [];  // type of declaration-1
let arr_2: string[] = [];       // type of declaration-2

arr_1.push('a');
arr_1.push('b');
arr_1.push('c');
console.log(arr_1);

arr_2.push('aa');
arr_2.push('bb');
arr_2.push('cc');
console.log(arr_2);


// Array w/ nested array
let nest_arr_1: number[][] = [];            // type of declaration-1
let nest_arr_2: Array<Array<number>> = [];  // type of declaration-2

nest_arr_1.push([1, 2, 3]);
nest_arr_1.push([1, 2, 3, 4]);
console.log(nest_arr_1);

nest_arr_2.push([10, 20, 30, 40]);
nest_arr_2.push([10, 20, 30, 40, 50, 60]);
console.log(nest_arr_2);
