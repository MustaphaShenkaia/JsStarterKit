### Get Start
- Terminal -> Select Default Profile -> Command Prompt
- package.json -> dependencies, devDependencies
- npm install -> package.json kur. 
- .gitignore -> Github'a yüklemez. 
- npm run dev
- Developer Console (f12)
- Component tree structure (SPA)
- index.html -> app.js -> Components

### VSCode Extensions
- Auto Rename Tag
- Bracket Pair Colorizer 2
- Dracula Official Theme
- ES7 React/Redux/GraphQL/React-Native snippets
- EditorConfig for VS Code (angular, react etc. şablonu yerine kendi boiler plate'ini oluştur)
- Live Server
- Material Icon Theme
- ESLint

### Github
- git clone ... 
- Remote -> Add Remote -> Add remote from Github ... (kendi repo)
- Pull / Push

### Notes
- JS dil yeteneği olarak C#, Python, Java kadar güçlü değil ama
fronted, backend, mobile vb. bir çok alanda yaygın olarak kullanılır.  
- JS website dinamic olmasını sağlar. JS type safe (tip güvenli) bir dil değildir. 
- JS kafası rahat dildir. Diğer diller gibi kuralları sıkı değildir. 
- Database -> Backend - Fronted -> (req, res) <- User
- DOM maniplasyonu; veri değişimine (dynamic) göre yeşil ok görünsün yada kırmızı ok görünsün şeklinde sayfa render (son görünüm) edilir. (w3schools)  
- Vanilla JS yerine modern dillere yakın geliştirilmiş standardizasyon diller kullanılır. (ECMA Script)
- Bazı JS kullanımları JS diline transpailer (çeviri) yapar. (babel, typescript etc.) 
- JS OOP işini function ile yürütür. ECMA Script ile dahada iyileştirilmiştir. 
- Do Not Repeat Yourself (DRY) kendini tekrarlamayan kod ve SOLID yazılım geliştirme kurallarını destekleyen metodolojide ilerlemek gerekir. 
- Hiç bir teknolojinin fanatiği olunmamalıdır. Teknolojiler değişkendir. Programlama programlamadır.  
- Tüm dillerin mantığı aynıdır, sadece nüans, syntax ve dil özellik farkları vardır.
- Birine hakimsen diğerine geçmen çok fazla bir vakit almaz. 
- SPA component'lerden oluşur.  

- Değer (value) tutan ve Operasyon (method) tutan class olmaz üzere 2 tür class vardır. 
- Proje yönetimi için functions gruplama yapmak gerekebilir. (controller, service etc.) 
- Özellikle nesne içerisinde tutup, bağımlılıklar enjekte etme durumlarında faydalıdır. 

- Service -> Sepete ekle, çıkar, güncelle gibi işlemlerin tutulur. (userService.js)
- Component (Ekran) -> Sayfanın görünen yüzünün (kullanıcı arayüzünün) parçalarıdır. 

### SOLID
- Single personsebilty -> Bir class sadece bir işi yapar. 
- Birden fazla iş yaparsa tekrar durumu oluşabilir. 
Mesela kullanıcı ile ilgili methodlar ile kullanıcı bilgileri aynı class içinde olmamalıdır. 
Olursa değer ve referans tutucularla class method tutucu aynı yerde olur. 
Bu durumda instalances (new) durumunda hepsi gelmiş olur. 

- index.html -> app.js -> components
- Component (model-service) -> Service -> Data
- userModel -> (super) -> customerModel, employeeModel // logger
- userService -> Data (API) 

