let score = true;

console.log(typeof score);

let scoreInNumber = Number (score);
score = scoreInNumber;
console.log(typeof (score));
console.log(score);


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = "gin"
let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
//"" => false
//"gin" => true