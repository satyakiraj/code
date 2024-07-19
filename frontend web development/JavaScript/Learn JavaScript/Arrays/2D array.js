let fruits = ["apple", "banana", "mango"];
let vegetables = ["onion", "cucumber", "bottle guard"];
let items = ["soap", "cream", "chocolate"];
let grocerry_list = [fruits, vegetables, items];
grocerry_list[0][0] = "kiwi";
console.log(grocerry_list);

for(let items_array of grocerry_list){
     console.log(items_array);
    //in this line of statement assigns the value of all_items the arrays to items_array
    for(let all_items of items_array){
        console.log(all_items);
    }
}
