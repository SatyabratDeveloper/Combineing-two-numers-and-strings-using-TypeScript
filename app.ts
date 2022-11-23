// combining two number or strings using 'combine' function
type Combine = number | string;

const combine = (input1: Combine, input2: Combine) => {
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

console.log(combine(5, 5));
console.log(combine("Satya", "brat"));

// combing two numbers using 'combine' function
let combineVales: (a:number, b: number) => number;
combineVales = combine;

console.log(combineVales(8, 8));

// adding two numbers using callback function 'add'
const add = (n1: number, n2: number, cb: (num: number) => void) => {
    const result = n1 + n2;
    cb(result);
}

console.log(add(15, 25, (result) => { console.log(result); }));