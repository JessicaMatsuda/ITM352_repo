//extra credit
let monthly_sales = [80, 50, 100, 29];
let tax_rate = 0.04;

function TaxAmount(sales, tax){
    let tax_owing = [];
};

//calculating tax amount
function TaxAmount(sales, tax){
    let tax_owing = [];
    for (let i = 0; i < sales.length; i++) {
        tax_owing.push(sales[i]*tax);
    }
    return tax_owing;
};

let tax_owing = TaxAmount(monthly_sales, tax_rate);


//output in console
console.log(tax_owing);