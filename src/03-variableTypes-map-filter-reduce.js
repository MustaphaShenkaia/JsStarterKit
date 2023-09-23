// API'den gelen data
let cart = [
    {id:1, productName:"Telefon", quantity:3, unitPrice:4000},
    {id:2, productName:"Bardak", quantity:2, unitPrice:30},
    {id:3, productName:"Kalem", quantity:1, unitPrice:20},
    {id:4, productName:"Şarj Cihazı", quantity:2, unitPrice:100},
    {id:5, productName:"Kitap", quantity:3, unitPrice:30},
    {id:6, productName:"Pot", quantity:5, unitPrice:150},
] 

// cart.push({id:7, productName:"Ruhsat", quantity:1, unitPrice:20})

function addToCart(sepet) {
    sepet.push({id:7, productName:"Ruhsat", quantity:1, unitPrice:20})
}
// Referans tiplerde atama bellekteki adrse yapılır. 
// cart referans adrese push edilir. 
// Bu sebepe çağırınca eklenmiş olarak gelir. 

addToCart(cart)

console.log(cart);

//-----------------------------

let sayi = 10; 

function sayiTopla(number) { // 10
    number += 1; // 11
}
sayiTopla(sayi) // 10

console.log(sayi); // 10

//========================================

// MAP() -> Array içerisinde iteration (tek tek dolaşma) yapar. 
// Dolaşırken yeni Array oluşturur. Iterate ederken yeni Arrap değişiklik ile oluşabilir. 

cart.map(product => console.log(product.productName)) 
// Single Line

console.log("<ul>")
    cart.map(product => {
        console.log("<li>"+product.productName + " : " 
        + product.unitPrice * product.quantity+"</li>")
    })
    // Multiple Line {} ile kullanılır. 
console.log("</ul>")

//========================================

// FILTER() -> Filreleme yapar. 
// Filtrelemede yeni Array oluşturur. Filtreleme ederken yeni Array değişiklik ile oluşabilir. 
// Filtrelen object'ler yeni Array ile döndürülür. 

let quantityOver2 = cart.filter(product => product.quantity>2)

console.log(quantityOver2) // Array

//========================================

// REDUCE() -> Toplama yapar.  

let total = cart.reduce((acc,product) => acc + product.unitPrice * product.quantity, 0)
// acc (akümülator)
console.log(total)