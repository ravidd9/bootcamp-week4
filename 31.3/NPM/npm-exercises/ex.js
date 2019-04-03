
//1
// const vali = require('validator')
// //Ex. 1
// //Check whether "shoobert@dylan" is a valid email (should be false)
// console.log(vali.isEmail('shoobert@dylan'))

// //Ex. 2
// //Check whether "786-329-9958" is a valid US mobile phone number (should be true) - use the en-US locale
// console.log(vali.isMobilePhone("786-329-9958", 'en-US'))

// //Ex. 3
// //Use the following blacklist
// let blacklist = ["!", "?", ".", "@", "~", ",", "'"]
// //Along with validator's `blacklist` method to clean this text:
// let text = "I'M SO EXCITED!!!~!"
// //Ultimately, it should print "im so excited"
// console.log(vali.blacklist("I'M SO EXCITED!!!~!", blacklist))


//2
// const faker = require('faker');
// const makeHuman = function(num){
//     let arr = []
//     for(let i = 0 ;i<3;i++){
//         let randomName = faker.name.findName()
//         let randomCompany = faker.company.companyName()
//         let avatar = faker.image.avatar()
//         console.log(randomName + ", " + randomCompany + ", " + avatar)
//     }
// }
// makeHuman(2)


//3
