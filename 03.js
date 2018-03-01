// #3 Play with CSV and object We have a collection of product and price with
// CSV formats: NAME, CATEGORY, PRICE Xiaomi Redmi 5A, Smartphone, 1199000
// Macbook Air, Laptop, 13775000 Samsung Galaxy J7, Smartphone, 3549000 DELL XPS
// 13, Laptop, 26799000 Xiaomi Mi 6, Smartphone, 5399000 LG V30 Plus,
// Smartphone, 10499000 Sort by price and transforms those collection into
// object within an array like this format: [   {     "name": "Macbook Air",
// "price": "Rp13.775.000",     "category": "Laptop"   } ] Notice the price use
// currency format. Preparation
let input = 'NAME, CATEGORY, PRICE\nXiaomi Redmi 5A, Smartphone, 1199000\nMacbook Air, Laptop' +
        ', 13775000\nSamsung Galaxy J7, Smartphone, 3549000\nDELL XPS 13, Laptop, 2679900' +
        '0\nXiaomi Mi 6, Smartphone, 5399000\nLG V30 Plus, Smartphone, 10499000';

// Algorithm
const solution = (input) => {

    let objectArray = [];

    let inputArray = input.split('\n');
    inputArray.shift(); // remove header

    inputArray.forEach(row => {
        let rowArray = row.split(',');

        // make individual row into object
        let priceObject = new Object();
        priceObject.name = rowArray[0].trim();
        priceObject.price = formatPrice(rowArray[2].trim());
        priceObject.category = rowArray[1].trim();

        objectArray.push(priceObject)
    });

    return objectArray;
};

// Helper Price Formatter
const formatPrice = (price) => {
    let formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        currencyDisplay:'symbol'
    });
    return formatter.format(Number.parseInt(price));
}

// Execution
console.log("Input:")
console.log(input);
console.log("\n\Output:");
console.log(solution(input));

// Assertion?
