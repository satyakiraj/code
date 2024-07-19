// template literals(``) = they are used to embed the value of a variable between a line. To write a template variable use this (`message ${name of the variable}`)  
function display(user, items, price){
    console.log(`hello ${user}`);
    console.log(`you have ${items} items in our cart`);
    console.log(`you're total price is $ ${price}`);
}
display("bro", 68, 67);