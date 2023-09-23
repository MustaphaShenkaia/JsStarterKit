export class BaseLogger{ // Adı genelde Base yada Default olur
    // Şablon // theme
    log(data){
        console.log("Default logger : " + data)
    }
}

// filebase logger

export class ElasticLogger extends BaseLogger{
    log(data){
        console.log("Logged to Elastic" + data)
    }
}
// BaseLogger içindeki tüm methodlara sahip olunur. 
// BaseLogger içindeki methodlar çağrılıp override edilir. 
// Override edilmek istenmezse direkt kullanılabilir. 

export class MongoLogger extends BaseLogger{
    log(data){
        console.log("Logged to Mongo" + data)
    }
}

