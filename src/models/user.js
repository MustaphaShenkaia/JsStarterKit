export default class User {

    // firstname:String -> type script
    // Bu şekilde data tanımlanmadığından constructur ve protatype kullanılır. 
    // constructur aslında bir fonksiyondur. 

    // prototyping
    constructor(id, firstName, lastName, city,age) {
        // console.log("constructor ile user oluştu..");
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.city = city
        this.age = age
    }
    // this keyword class'ı temsil eder.    
    // Saf (pure) JS'de class yoktur herşey function'dur. 
    // Class'lar function hale transpailer edilir. 
}