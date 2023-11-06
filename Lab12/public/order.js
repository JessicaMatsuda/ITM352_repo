let params = (new URL(document.location)).searchParams;
let q = Number(params.get('quantity'));
let error = params.get('error');

if (error) {
    alert(error);
}

//Select div where product details should be displayed
let productDetailsDiv = document.getElementById('productDetails');

//Display first product's details
productDetailsDiv.innerHTML = `<h3>${products[0]["brand"]} at \$${products[0]["price"]}</h3>`;

//Select div where product list will be deployed 
let productListDiv = document.getElementById('productList');

//Iterate through products and display sold counts 
for (let i in products) {
    productListDiv.innerHTML += `<h4>${products[i]["total_sold"]} ${products[i]["brand"]} have been sold</h4>`;
}