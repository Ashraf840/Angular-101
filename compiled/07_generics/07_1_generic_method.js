// Generics
// Video Ref: https://www.youtube.com/watch?v=IOzkOXSz9gE
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Pass an object to a function to append UID to it & return a new object
var addUID = function (obj) {
    var uid = Math.floor(Math.random() * 1000);
    return __assign(__assign({}, obj), { uid: uid });
};
var newObj = addUID({ name: 'yoshi', age: 23 });
console.log("newObj:", newObj);
// console.log(newObj.name);   // NB: While the func expects an object to be passed, it doen't actually know what specific properties the obj will contain. Moreover, when the func returns another obj, it also doen't know what properties it's containing expect the "uid" property. Thus it throws error.
// To mitigate the issue, we use generics. The generics captures whatever properties are passed while invoking the function. SO whenever any prop is called which is returned from the func won't raise any error.
var addUID_2 = function (obj) {
    var uid = Math.floor(Math.random() * 1000);
    return __assign(__assign({}, obj), { uid: uid });
};
var newObj_2 = addUID_2({ name: 'Hamamoto', age: 47 }); // Captures all the props of the object while invoking the func here
console.log("newObj_2 (w/ generics):", newObj_2.name); // Now, we can access any prop of the object returned from the func
// NB: However, we can pass anything to the aforementioned generic function. Hence, to be more specific about passing an object as a mandatory args, we can use the "extends" keyword
var addUID_3 = function (obj) {
    var uid = Math.floor(Math.random() * 1000);
    return __assign(__assign({}, obj), { uid: uid });
};
// let newObj_3 = addUID_3('Hellow');  // Cannot pass a string, func expecting an Object
// let newObj_3 = addUID_3(12334);     // Cannot pass a number, func expecting an Object
var xyz;
xyz = [1, 2, 3, 4, 5, 6, 7];
var newObj_3 = addUID_3(xyz); // Though I can pass an array of numbers while the func is expecting an object, it's the defficiency of typescript.
// NB: The array elems will be spreaded out, keys will be automatically generated as number starting from 0 to construct an object out of that array, then the "uid" will be added into the object
console.log("newObj_3 (w/ generics of specific type (object)):", newObj_3);
// We can be more specific about passing props in the obj while passing into the generic func
var addUID_4 = function (obj) {
    var uid = Math.floor(Math.random() * 1000);
    return __assign(__assign({}, obj), { uid: uid });
};
// let newObj_4 = addUID_4({ age: 43 });   // Throw error, since no "name" prop is defined while passing the obj
var newObj_4 = addUID_4({ name: "Ashimi", age: 24 }); // At least, the name prop required to be defined while passing an obj
console.log("newObj_4 (w/ generics of specific props of obj)):", newObj_4);
