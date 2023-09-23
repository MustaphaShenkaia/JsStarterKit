import {users} from '../data/users.js'; // Array
import DataError from '../models/dataError.js';

export default class UserService {

    constructor(loggerService) {
        this.users = []
        this.employees = []
        this.customers = []
        this.errors = []
        this.loggerService = loggerService
        // this.users = getUsersFromDb() 
        // normalde constructor içinde kullanılmaz. 
    }

    //====================================================

    // METHODS

    add(user) {
        // console.log("Kullanıcı eklendi: " + user); // user object
        // this.users.push(user)
        switch (user.type) {
            case "customer":
                if (!this.checkCustomerValidityForErrors(user)) {
                    this.customers.push(user)
                }                
                break;
            case "employee":
                this.employees.push(user)
                break;
            default:
                this.errors.push(new DataError("Wrong user type",user))
                break;
        }
    }
    // Class içindeki methodlarda function adı kullanılmaz. 
    list() {
        // console.log("Kullanıcılar listelendi..");
        // return this.users
    }
    listCustomers() {
        return this.customers
    }
    getById(id) {
        // console.log("Kullanıcı çağrıldı..");
        // return this.users.find(u => u.id === id)
    }
    getCustomerById(id) {
        return this.users.find(u => u.id === id)
    }
    getCustomersSorted() {
        return this.customers.sort((customer1, customer2) => {
            if (customer1.firstName>customer2.firstName) {
                return 1; 
            } else if (customer1.firstName===customer2.firstName) {
                return 0; 
            } else {
                return -1; 
            }
        })
    }
    // Employee ve User service olarak ayrı yerlerde olmalılardır. 


    //=========================================


    load(){
        for (const user of users) {
            // console.log(user);
            switch (user.type) {
                case "customer":
                    if (!this.checkCustomerValidityForErrors(user)) {
                        this.customers.push(user)
                    }                    
                    break;
                case "employee":
                    if (!this.checkEmployeeValidityForErrors(user)) {
                        this.employees.push(user)
                    }                         
                    break;
                default:
                    this.errors.push(new DataError("Wrong user type",user))
                    break;
            }
        }
    }

    // Formik-Yup library
    checkCustomerValidityForErrors(user) {  
        let requiredFields = "id firstName lastName city age".split(" ") // array döner  
        // console.log(user[requiredFields[1]]);      
        let hasErrors = false
        for (const field of requiredFields) {
            if (!user[field]) { // alanlar eksik gelirse
                hasErrors = true
                this.errors.push(new DataError(`Valdation problem. ${field} is required`, user))
            }
        }

        if (Number.isNaN(Number.parseInt(user.age))) {
            this.errors.push(new DataError(`Valdation problem. ${user.age} is not a number`, user))
        }
        return hasErrors
    }

    checkEmployeeValidityForErrors(user) {  
        let requiredFields = "id firstName lastName city age salary".split(" ") // array döner  
        // console.log(user[requiredFields[1]]);      
        let hasErrors = false
        for (const field of requiredFields) {
            if (!user[field]) { // alanlar eksik gelirse
                hasErrors = true
                this.errors.push(new DataError(`Valdation problem. ${field} is required`, user))
            }
        }
    }
}
// export -> Dışarıdan import edilebilir. 
// default -> JS dosya bazlı (file base) olduğundan dışarıdan import edildiğinde 
// direkt bu class çalışır. 
// Aksi takdirde import {UserService} şeklinde çağrılır. 







