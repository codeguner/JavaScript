const accountId = 144553
let accountEmail = "rahul@gmail.com"
var accountPassword = "2345820"
accountCity = "Jaipur"
let accountState;

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


// accountId = 87633  not allowed
accountEmail = "som@gmail.com"
accountPassword = "48738493"
accountCity = "Patna"

console.log(accountId)

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])