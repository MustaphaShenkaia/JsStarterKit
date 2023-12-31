// FUNCTIONS

// Sepete ekle bir çok sayfaya konabilir. 
// Bu sebeple function ile bir defa sepete ekle yapılır ve her sayfaya konur. 
console.log('Sepete eklendi..');
console.log('Sepete eklendi..');
console.log('Sepete eklendi..');
console.log('Sepete eklendi..');
// Bu sayfalarda sepete eklemede değişiklik yapıldığında her sayfada değişiklik yapılmalıdır. 
// Bu hem unutulmaya hem de çok vakit harcamak demektir. 
// Don't repeat yourself -> bir kodu 2 kere yazıyorsan o iki yeride güncellemen gerekir. 

function addToCart1(productName="Elma") {
    console.log("Sepete eklendi : " + productName)
}
addToCart1() // undefined // Elma (default)
addToCart1("Yumurta")
addToCart1(15) // Hata vermez Type Safe değildir. 

//-----------------------------------------------------------

function addToCart2(quantity, productName="Elma") { // default sona yazılır
    console.log("Sepete eklendi Ürün: " + productName + " Adet: " + quantity)
}
addToCart2(10)

//-----------------------------------------------------------

let sayHello = ()=>{
    console.log("Hello World!")
}
sayHello()
// fonksiyon değişkene atanabilir. 

let sayHello2 = function () {
    console.log("Hello World 2")
}
sayHello2();

//-----------------------------------------------------------

function addToCart3(productName, quantity, unitPrice) {
    // Çoklu Parametreler ile işlem best practise değildir. 
    // Parametrelerde karışıklık olabilir yada unutulablir. 
    // Bu sebeple objects kullanılır. 
}
addToCart3("Elma",5,10)
addToCart3("Armut", 2, 20)
addToCart3("Limon",3,15)

//-----------------------------------------------------------

// FUNCTIONS & OBJECT

let product1 = {productName:"Elma", unitPrice:10, quantity:5}

function addToCart03(p) {
    console.log("Ürün : " + p.productName)
    console.log("Adet : " + p.quantity)
    console.log("Fiyat : " + p.unitPrice)
}
addToCart03(product1)

// VALUE TYPE & REFERANCE TYPE

let product2 = {productName:"Elma", unitPrice:10, quantity:5}
let product3 = {productName:"Elma", unitPrice:10, quantity:5}
product2 = product3 // Aynı referans adresine sahip olurlar. 
product2.productName = "KARPUZ" // product2 ve product3 her ikisindede karpuz olur. 
console.log(product2.productName)
console.log(product3.productName)
//      Stack       Ref.No. Heap
// 101  Product2    101 {productName:"Elma", unitPrice:10, quantity:5}
// 102  Product3    102 {productName:"Elma", unitPrice:10, quantity:5}
// Object referans tip 
// product3 referans no'su 102 Product2'ye atanır. 
// 102 referans no hem Product2 hem de Product3 için aittir. 
// Yani aynı heap değer içeriğine sahip olurlar. 

let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2
sayi2 = 100
console.log(sayi1) // 20 
// Value Type (Değer tip)

//      Stack    Heap
// 101  Sayi=10
// 102  Sayi=20
// Değer atanır ve iş biter. Sayılar değer tiptir. 

//-------------------------------------

// FUNCTIONS & ARRAY

function addToCart4(products) {
    console.log(products)
}

let products = [
    {productName:"Elma", unitPrice:10, quantity:5},
    {productName:"Armut", unitPrice:10, quantity:5},
    {productName:"Karpuz", unitPrice:10, quantity:5}
]

addToCart4(products)
