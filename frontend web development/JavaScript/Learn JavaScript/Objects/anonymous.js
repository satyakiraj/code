//anonymous object are the objects without a name. we cannot directly access these objects we don't need to create variables to store objects created is using the class
class Card{
    constructor(value, color){
        this.value = value;
        this.color = color;
    }
}
const cards_collection = [new Card("A", "Red"), new Card("A", "Black"), new Card("A", "Red"), new Card("A", "Black"), new Card(10, "Black"),new Card(10, "Red"), new Card(10, "Black"), new Card(10, "Red")];
cards_collection.forEach((card) => console.log(`${card.value} ${card.color}`));
