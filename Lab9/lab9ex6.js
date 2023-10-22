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
};

let attributes  =  "Jessica; 21; 21.5; -20.5";
let pieces = attributes.split(';');

/*
//using a callback function
pieces.forEach(checkIt);
function checkIt(item, index){
    console.log(`Piece ${index} is ${(CheckForNonNegInt(item)?'a':'not a')} quantity`);
};
*/

pieces.forEach((item,index) => {console.log(`Piece ${index} is ${(CheckForNonNegInt(item)?'a':'not a')} quantity`);
});

//question 19

function download(url, callback) {
    setTimeout(() => {
        // script to download the picture here
        console.log(`Downloading ${url} ...`);
        picture_data = "image data:XOXOXO"; 
        callback(picture_data);
    }, 3* 1000);
   
}

function process(picture) {
    console.log(`Processing ${picture}`);
}

let url = 'https://www.example.com/big_pic.jpg';
download(url, process);
    