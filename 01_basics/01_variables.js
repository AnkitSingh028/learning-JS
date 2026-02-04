const accountId = 78999
let accountEmail = "ankitsingh@google.com"
var accountPassword = "77774"
accountCity = "Delhi"
let accountState;

// accountId = 2 // not allowed


accountEmail = "as@as.com"
accountPassword = "21212121"
accountCity ="Greater noida"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])