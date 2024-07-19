    //print array forward
    let prices = [45, 67, 78];
    for(let i = 0; i < prices.length; i++){
       console.log(prices[i]);
    }
    //print array backward
   for(let i = prices.length - 1; i >= 0; i--){
      console.log(prices[i]);
   }
    //of statement is used to take all the values of a string or an array and assigns it to a variable
    for(let price of prices){
      console.log(price);
    }