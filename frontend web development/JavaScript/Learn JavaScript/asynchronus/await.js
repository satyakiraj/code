//await is use to make a function wait for a promise.
//it doesn't requires .then and .catch method
async function file_load(value){
    let file_found = value;
     if(file_found){
        return "File Found";
     }else{
        throw "File Not Found";
     }
}
async function wait_load(){
   try{
      let message = await file_load(false);
      console.log(message)
   }
   catch(error){
      console.log(error);
   }
}
wait_load();