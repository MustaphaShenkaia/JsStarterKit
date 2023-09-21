console.log("Merhaba JS"); 

// VAR
var dolarDun1 = 9.20
dolarDun1 = 'Ankara' //JS type safe değildir
var dolarBugun1 = 9.30

console.log(dolarDun1); //Normal dillerde kod derlenmez

//-------------------------------------

var dolarBugun2 = 9.30

console.log(dolarDun2); // undefined - JS hata vermez. 

var dolarDun2 = 9.20

//-------------------------------------

var dolarBugun3 = 9.30

var dolarDun3 

console.log(dolarDun3); // undefined - JS hata vermez. 

//-------------------------------------

// LET (ECMA Script)

let dolarBugun01 = 9.30

let dolarDun01 = 9.20

dolarDun01 = "9.20" // JS type safe değildir

{
    let dolarDun01 = 9.10
}

console.log(dolarDun01) // 9.20
// Değişkenler tanımlandığı scope içinde geçerlidir. 
// VAR ile kullanılsa scope yok gibi davranır. 
// JS type safe değildir. Veri formatları farklı gelirse sıkıntı yapmaz. 

//-------------------------------------

// CONST (ECMA Script)

const euroDun = 11.2
// euroDun = 11 // euroDun is read-only

console.log(euroDun)
// const sabittir ve değişmez. (Value type)
// const ile tanımlamada değişkene değer atanmalıdır. 
// Değişkenler VALUE TYPE ve REFERENCE TYPE olarak 2 şekildedir. 

//-------------------------------------

// ARRAY (dizi)
// Birden fazla veriyi bir değişkende tutmaya yarar. 

// camelCasing -> variable, function, method
// PascalCasing
let konutKredileri = ["Konut kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredisi"]
console.log(konutKredileri);
// ['Konut kredisi', 'Emlak Konut Kredisi', 'Kamu Konut Kredisi', 'Özel Konut Kredisi']
// Array içinde farklı türden veriler olabilir. [12,'Emlak',true]

// https://jsonplaceholder.typicode.com/
// https://jsonplaceholder.typicode.com/users
// let users = getUsersFromApi // API yada Backend'den [] içinde geldiğinden Array diyebiliriz. 

console.log("<ul>")
    for(let i = 0; i<konutKredileri.length; i++){
        console.log("<li>"+konutKredileri[i]+"</li>")
    }
console.log("</ul>")
{/* <ul>
    <li>Konut kredisi</li>
    <li>Emlak Konut Kredisi</li>
    <li>Kamu Konut Kredisi</li>
</ul> */}

