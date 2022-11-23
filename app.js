var combine = function (input1, input2) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
};
console.log(combine(5, 5));
console.log(combine("Satya", "brat"));
// combing two numbers using 'combine' function
var combineVales;
combineVales = combine;
console.log(combineVales(8, 8));
// adding two numbers using callback function 'add'
var add = function (n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
};
console.log(add(15, 25, function (result) { console.log(result); }));
