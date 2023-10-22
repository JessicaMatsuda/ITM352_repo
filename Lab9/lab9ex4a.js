//part2
/*
let attributes = "Jessica;21;Accounting"
let pieces = attributes.split(";",3);
console.log(pieces)
*/


//part 3b
/*
let invert = pieces.join(',')
console.log(invert);
*/

//ex 4

function isNonNegInt(q) {
    errors = []; // assume no errors at first
    if(Number(q) != q) errors.push('Not a number!'); // Check if string is a number value
    if(q < 0) errors.push('Negative value!'); // Check if it is non-negative
    if(parseInt(q) != q) errors.push('Not an integer!'); // Check that it is an integer    

    return (errors.length == 0);
}

let attributes  =  "Jessica; 21; 21.5; -20.5";
let pieces = attributes.split(';');

for(let i = 0; i < pieces.length; i++) {
    console.log("Is", pieces[i], "a non-negative integer?", isNonNegInt(pieces[i]));
}