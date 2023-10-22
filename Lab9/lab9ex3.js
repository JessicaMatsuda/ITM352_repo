//part 3a
let attributes  =  "Jessica; 21; 21.5; -20.5";
let pieces = attributes.split(';');

for (let i = 0; i < pieces.length; i++) {
    console.log(`${pieces[i]}, ${typeof pieces[i]}`);
}

//part 3b
let invert = pieces.join(',')
console.log(invert);