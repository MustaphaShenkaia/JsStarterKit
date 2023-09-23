// Değer (value) tutan ve Operasyon (method) tutan class olmaz üzere 2 tür class vardır. 
// Proje yönetimi için functions gruplama yapmak gerekebilir. 
// Özellikle nesne içerisinde tutup, bağımlılıklar enjekte etme durumlarında faydalıdır. 

// Service -> Sepete ekle, çıkar, güncelle gibi işlemlerin tutulur. 
// services -> userService.js

// Component (Ekran) -> Sayfanın görünen yüzünün (kullanıcı arayüzünün) parçalarıdır. 



//---------------------------------------------

// SOLID

// Single personsebilty -> Bir class sadece bir işi yapar. 
// Birden fazla iş yaparsa tekrar durumu oluşabilir. 
// Mesela kullanıcı ile ilgili methodlar ile kullanıcı bilgileri aynı class içinde olmamalıdır. 
// Olursa değer ve referans tutucularla class method tutucu aynı yerde olur. 
// Bu durumda instalances (new) durumunda hepsi gelmiş olur. 

//  index.html -> app.js -> components
//  userComponent
//      -> userModel -> (super) -> customerModel, employeeModel // logger
//      -> userService -> Data (API) 