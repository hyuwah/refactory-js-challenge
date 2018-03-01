// #8 Play with JSON We have simple purchases data in JSON format
// https://gist.github.com/mul14/1de7163a63efce2112a9510a7ba92383#file-08-md You
// need to do three things: Find all purchases made in February. Find all
// purchases made by Ari, and add grand total by sum all total price of items.
// The output should only a number. Find people who have purchases with grand
// total lower than 300000. The output is an array of people name. Duplicate name
// is not allowed.

// Preparation
let input = [
    {
        "order_id": "SO-921",
        "created_at": "2018-02-17T03:24:12",
        "customer": {
            "id": 33,
            "name": "Ari"
        },
        "items": [
            {
                "id": 24,
                "name": "Sapu Lidi",
                "qty": 2,
                "price": 13200
            }, {
                "id": 73,
                "name": "Sprei 160x200 polos",
                "qty": 1,
                "price": 149000
            }
        ]
    }, {
        "order_id": "SO-922",
        "created_at": "2018-02-20T13:10:32",
        "customer": {
            "id": 40,
            "name": "Ririn"
        },
        "items": [
            {
                "id": 83,
                "name": "Rice Cooker",
                "qty": 1,
                "price": 258000
            }, {
                "id": 24,
                "name": "Sapu Lidi",
                "qty": 1,
                "price": 13200
            }, {
                "id": 30,
                "name": "Teflon",
                "qty": 1,
                "price": 190000
            }
        ]
    }, {
        "order_id": "SO-923",
        "created_at": "2018-02-28T15:20:43",
        "customer": {
            "id": 33,
            "name": "Ari"
        },
        "items": [
            {
                "id": 303,
                "name": "Pematik Api",
                "qty": 1,
                "price": 12000
            }, {
                "id": 49,
                "name": "Panci",
                "qty": 2,
                "price": 70000
            }
        ]
    }, {
        "order_id": "SO-924",
        "created_at": "2018-03-02T14:30:54",
        "customer": {
            "id": 40,
            "name": "Ririn"
        },
        "items": [
            {
                "id": 986,
                "name": "TV LCD 40 inch",
                "qty": 1,
                "price": 6000000
            }
        ]
    }, {
        "order_id": "SO-925",
        "created_at": "2018-03-03T14:52:22",
        "customer": {
            "id": 33,
            "name": "Ari"
        },
        "items": [
            {
                "id": 1033,
                "name": "Nintendo Switch",
                "qty": 1,
                "price": 4990000
            }, {
                "id": 2003,
                "name": "Macbook Air 11 inch 128 GB",
                "qty": 1,
                "price": 12000000
            }, {
                "id": 23,
                "name": "Pocari Sweat 600ML",
                "qty": 5,
                "price": 7000
            }
        ]
    }, {
        "order_id": "SO-926",
        "created_at": "2018-03-05T16:23:20",
        "customer": {
            "id": 58,
            "name": "Annis"
        },
        "items": [
            {
                "id": 24,
                "name": "Sapu Lidi",
                "qty": 3,
                "price": 13200
            }
        ]
    }
]

// Solution 

//Input: input json, Month: 1-12
const getPurchaseInMonth = (input, month) => {

    // getMonth() returns 0 buat januari, 11 buat desember
    month -= 1;

    return input.filter(purchase => {
        let date = new Date(purchase.created_at)
        return date.getMonth() == month; // februari = 1
    });

}

//Input: input json, name: nama orang yang mau dicari
const getTotalPriceByName = (input,name) => {
    let totalPrice = 0;

    // Filter purchase made by 'name'
    let purchases = input.filter(purchase=>{
        return purchase.customer.name.toLowerCase() === name.toLowerCase();
    })

    // TODO belum dikali item!
    // Sum the price of all item
    purchases.forEach(purchase => {
        purchase.items.forEach(item=>{
            totalPrice+=(item.price*item.qty);
        })
    });

    return totalPrice;
}

//Input: input json, number: batas total belanja
const getPeopleWithTotalPurchaseLessThan = (input, number) => {
    let resultArray = [];

    // Get People list
    let peopleArray = [];
    input.forEach(purchase=>{
        if(!peopleArray.includes(purchase.customer.name.toString())){
            peopleArray.push(purchase.customer.name.toString());
        }
    });

    // Filter people by total purchase
    peopleArray.forEach(people=>{
        if(getTotalPriceByName(input,people) < number){
            resultArray.push(people);
        }
    });
    
    return resultArray;
}




// Execution & Assertion

// 1
console.log("> All purchases made in February:")
console.log(getPurchaseInMonth(input, 2)); // Februari = 2
console.log()

// 2
console.log("> Total price of all purchases made by Ari:")
console.log(getTotalPriceByName(input, 'Ari'));
console.log()

// 3
console.log("> People whose total price is lower than 300000:")
console.log(getPeopleWithTotalPurchaseLessThan(input, 300000))
console.log()

