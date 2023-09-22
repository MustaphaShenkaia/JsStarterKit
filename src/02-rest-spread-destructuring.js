// REST OPERATOR (Array içine toplama) 30,10,500,600,120 () -> [30,10,500,600,120] []  

function add1(number1, number2) {
    console.log(number1 + number2);
}

function add2(number1, number2, number3) {
    console.log(number1 + number2 + number3); // 90
}

function add(...numbers) { 
    // Paramertre elemanları array içine atar. 
    // console.log(numbers); [0,30,40,50]
    let total = 0; 

    for (let i = 0; i < numbers.length; i++) {
        // numbers array
        // console.log(numbers[i]);        
        total = total + numbers[i]; 
    }
    console.log("Toplam sayı değeri: " + total);    

}
// REST Operator her zaman en son parametre olarak function içinde kullanılır. 
// Başka parametreler varsa ilk onu görür geri kalan rest içine atılır. 
// Aksi takdirde işler karışır. 

add1(20,30)
add2(20,30,40)
add(20,30,40,50)

//--------------------------

function addd(bisey,...numbers) { //rest
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
    }
    console.log(total)
    console.log(bisey)
}

addd(20,30)
//add(20,30, 40)
//add(20,30, 40, 50)


//====================================================


// SPREAD (Array'dan Ayrıştırma) OPERATOR [30,10,500,600,120] [] -> 30,10,500,600,120 ()

let numbers = [30,10,500,600,120]
//console.log(...numbers) // 30,10,500,600,120
console.log(Math.max(...numbers))
// function() -> [] -> function()


//====================================================


// DESTRUCTURING
// API'den gelen veriyi hızlı şekilde parçalamaya yarar. 

let [icAnadoluu, marmaraa, karadenizz] = ["İç Anadolu","Marmara","Karadeniz"]
console.log(icAnadoluu); // İç Anadolu

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name:"İç Anadolu", population:"20M"},
    {name:"Marmara", population:"30M"},
    {name:"Karadeniz", population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"],
    ]
]
console.log(icAnadolu); // {name: 'İç Anadolu', population: '20M'}
console.log(icAnadolu.name) // İç Anadolu
console.log(icAnadolu.population) // 20M
console.log(icAnadoluSehirleri) // ['Ankara', 'Konya']

//--------------------------

let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity } 
= {productName:"Elma", unitPrice:10, quantity:5})

console.log(newProductName) // Elma
console.log(newUnitPrice) // 10
console.log(newQuantity) // 5

// Framework ile kullanım
// params.title yerine {title} ile direkt değer alınır. 
/*
login({title}) {     
    console.log("<h1>" + title + "</h1>");
}
*/