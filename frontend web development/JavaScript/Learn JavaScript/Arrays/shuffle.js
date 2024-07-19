let cards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

const shuffle = function (array) {
    let current_index = array.length;
    while (current_index != 0) {
        let random_index = Math.floor(Math.random() * array.length);
        current_index--; 
        let temp = array[current_index];
        array[current_index] = array[random_index];
        array[random_index] = temp;
    }
    return array;
}
shuffle(cards);
cards.forEach((element) => console.log(element));