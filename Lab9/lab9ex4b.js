//part2
/*
let attributes = "Jessica;21;Accounting"
let pieces = attributes.split(";",3);
console.log(pieces)
*/


//part 3b
/*let invert = pieces.join(',')
console.log(invert);
*/
//ex 4

//the following checks if the input is a nonnegative integer and pushes an error message if so
function CheckForNonNegInt(q, returnErrors = false) { //the function returns non-negative integers within the object
    errors = []; // assume no errors at first
    if(Number(q) != q) errors.push('Not a number!'); // Check if string is a number value
    if(q < 0) errors.push('Negative value!'); // Check if it is non-negative
    if(parseInt(q) != q) errors.push('Not an integer!'); // Check that it is an integer    

    return returnErrors ? errors : (errors.length == 0);
}

let attributes  =  "Jessica; 21; 21.5; -20.5";
let pieces = attributes.split(';');

for(let i = 0; i < pieces.length; i++) {
    console.log("Is", pieces[i], "a non-negative integer?", isNonNegInt(pieces[i]));
}