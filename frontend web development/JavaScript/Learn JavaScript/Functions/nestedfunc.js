//nested functions have a function inside another function. outer function can be accessed from outside but inner function cannot be accessed from outside
var user = "Satyaki";
var inbox = 10;
const login = function () {
   const displayUsername = function () {
      console.log(`Hello ${user}`);
   }
   const displayInboxes = function () {
      console.log(`You have ${inbox}`);
   }
   displayUsername();
   displayInboxes();
}
login();