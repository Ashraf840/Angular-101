let swapNums_container: [num1: number, num2: number];

function swapNums(num1: number, num2: number): [number, number] {
    return [num2, num1];
}

swapNums_container = swapNums(10, 20);

console.log(`Swapped Numbers:`, swapNums_container);
console.log(`First num after swapping:`, swapNums_container[0]);
console.log(`Second num after swapping:`, swapNums_container[1]);


/*
Anatomy of this code:
- "swapNums_container" variable is meant to hold numbers of array.
- "swapNums()" function will return array of numbers by defining the "[number, number]" after defining the func name.
- This func will also expects two numbers as params while invoking this func.
*/