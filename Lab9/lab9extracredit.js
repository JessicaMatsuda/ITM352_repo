let monthly_sales = [80, 50, 100, 29];
let tax_rate = 0.04;

function TaxOwed(sales, tax){
    let tax_owing = [];
};

function TaxOwed(sales, tax){
    let tax_owing = [];
    for (let i = 0; i < sales.length; i++) {
        tax_owing.push(sales[i]*tax);
    }
    return tax_owing;
};

let tax_owing = TaxOwed(monthly_sales, tax_rate);
console.log(tax_owing);