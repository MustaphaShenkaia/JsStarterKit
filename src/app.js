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