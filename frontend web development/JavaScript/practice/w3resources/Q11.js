function add_callback(arg1, arg2, callback) {
    setTimeout(() => {
        const result = arg1 + arg2;
        if (result % 2 !== 0) {
           callback(new Error("Sum Is not an even number"), null)
        }else{
            callback(null, result)
        }
    }, 1000);
}
function Promise_based_function(arg1, arg2){
    return new Promise((resolve, reject) => {
        add_callback(arg1, arg2, (error, result) =>{
            if(error){
                reject(error);
            }else{
                resolve(result);
            }
        })
    })
}
function returning(a, b){
     Promise_based_function(a, b)
      .then(result => {
        console.log(`Result: ${result}`)
      })
      .catch(error => {
           console.log(error.message);  //message is an property in the class error the message i what we write in the error keyword .
      })
}
returning(5, 5);