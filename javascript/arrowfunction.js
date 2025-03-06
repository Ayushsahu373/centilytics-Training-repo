var funvar= function fun() {
    var data=23;
    return data*34;
};

console.log(funvar);   //is refrence variable for function
console.log(funvar()); //will work as function
var funvar2= function() {
    var data=23;
    return data*34;
};
console.log(funvar2());  //same

var arrowfun=()=>{
    return new Date();
}
console.log(arrowfun())  //same



var arrConcat=function(val1,val2){
    return val1.concat(val2);
}
var arr1=[12,23];
var arr2=[21,32];

console.log(arrConcat([[1,2,3,4]],arrConcat(arr1,arr2)));

// doing same with arrow fun

var arrcon=(val1,val2)=>
    val1.concat(val2);

console.log(arrcon([1,2,3],[33,22,11]));



//higher order arrow function
// Higher-order arrow function that takes a function and a number array
var modifyArray = (arr, operation) => arr.map(operation);

// Function to square numbers
var square = (num) => num * num;

// Function to double numbers
var double = (num) => num * 2;

var numbers = [1, 2, 3, 4, 5];

console.log(modifyArray(numbers, square)); // [1, 4, 9, 16, 25]
console.log(modifyArray(numbers, double)); // [2, 4, 6, 8, 10]

