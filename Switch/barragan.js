
console.log("Welcome to McDonalds!!😀")

let message = "";

switch (prompt("Which combo would you like (1-5)")) {
    case "1":
        message = "Big mac, fries, and a soda";
        break;
    case "2":
        message = "Quarter Pounder with Cheese, fries, and a soda";
        break;
    case "3":
        message = "Double Quarter Pounder with Cheese, fries, and a soda";
        break;
    case "4":
        message = "Buttermilk Crispy Chicken, fries, and a soda";
        break;
    case "5":
        message = "Two Cheeseburgers, fries, and a soda";
        break;
    default:
        message = "Try again, that is not in the menu. 😢";
}

console.log(message);

console.log("Thank you for ordering!");

