// generic func-1
function getItems<Type>(items: Type[]) : Type[] {
    return new Array<Type>().concat(items);
}

let concatResult = getItems<number>([1,2,3,4,5]);
console.log(`concatResult:`, concatResult);

let concatString = getItems<string>(["a","b","c","d","e"]);
console.log(`concatString:`, concatString);

