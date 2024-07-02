var apple = "apple";
var upperCase = "APPLE";
var ten = 10;
var twenty = 20;
var fruits = ["Apple", "Banana", "mango", "cherry"];
// Tests for equility and inequality in strings
console.log("is apple is equal to apple?");
console.log(apple == "apple");
console.log("is apple is not equal to apple?");
console.log(apple != "apple");
// Tests using the lowercase
console.log("Is APPLE is equal to apple after converting to lowercase");
console.log(upperCase.toLowerCase() == "apple");
console.log("Is APPLE is not equal to apple after converting to lowercase");
console.log(upperCase.toLowerCase() != "apple");
// Numerical Tests
//equal to
console.log("Is ten is equal to twenty");
console.log(ten == twenty);
//Not equal to
console.log("Is ten is not equal to twenty");
console.log(ten != twenty);
//Greater than
console.log("Is ten is Greater than zero");
console.log(ten > 0);
// less than
console.log("is twenty is less than ten?");
console.log(twenty < ten);
// greater than or equal to
console.log("Is ten is greater than or equal to 5?");
console.log(ten >= 5);
// less than or equal to
console.log("Is twenty is less than or equal to ten?");
console.log(twenty <= ten);
//Tests using and & or operators
//using And (&&)
console.log("\nTwenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
console.log("\nTwenty is not equal to 10 and twenty is greater than 30");
console.log(twenty != 10 && twenty > 30);
//Using OR (||)
console.log("\n Twenty is greater then 50 OR twenty is equal to 20");
console.log(twenty > 50 || twenty == 20);
console.log("\n Twenty is greater then 50 OR twenty is not equal to 20");
console.log(twenty > 50 || twenty != 20);
// test whether an item is inclued in array
console.log("Is cherry include  in my fuits array");
console.log(fruits.includes("cherrynode"));
console.log("Is cherry not include  in my fuits array");
console.log(!fruits.includes("cherry"));
