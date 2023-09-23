import { BaseLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js";
import User from "../models/user.js"; // userModel
import Customer from "../models/customer.js"; // userModel
import UserService from "../services/userService.js"; // user service

/*
let userService = new UserService() // user service
    userService.add() // Kullanıcı eklendi..
    userService.getById(1) // Kullanıcı çağrıldı..
    userService.list() // Kullanıcılar listelendi..
*/

//----------------------------------

// let user1 = new User() // userModel 
// new User() ile user constructor çalışır. 
// Form bilgileri ad, soyad vb. (component form) object içine atılarak işlem yapılır. 

//----------------------------------

// Prototyping -> Sonradan key ve value eklemektir. (Example) 
let customer = {id:1, firstName:"Mustafa"}
customer.lastName = "Senkaya" // objecte eklenir
console.log(customer.lastName) // Senkaya

//----------------------------------

// userService & userModel kullanımı (model -> service)
let userService = new UserService() 
let user1 = new User(1,"Murat","Kalıcı","Ankara")
let user2 = new User(2,"Muhittin","Topalak","Muğla")
    userService.add(user1) // Add Page
    userService.add(user2) // Add Page
        //console.log(userService.list()) // List Page
        //console.log(userService.getById(1)) // Detail Page

//----------------------------------

// let logger1 = new BaseLogger()
let logger1 = new MongoLogger()
let userService2 = new UserService(logger1) 

//----------------------------------

let userService3 = new UserService() 

userService3.load()
console.log(userService3.customers);
console.log(userService3.employees);
console.log(userService3.errors);
// prototype
let customerToAdd = new Customer(1,"Seda","Yılmaz","Ankara",25)
customerToAdd.type = "customer"
userService3.add(customerToAdd)

console.log(userService3.getCustomersSorted());





