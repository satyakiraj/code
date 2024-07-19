//async makes a function return a promise.
//it doesn't requires resolve and reject callback. 
async function check_file_found(value) {
   let file_found = value;
   if (file_found) {
      return Promise.resolve("File Found");
      //other way to do this.
      //   return "File Found";
   } else {
      return Promise.reject("File Not Found");
      //throw is always use for errors
      //other way to do this.
      throw "File Not Found";
   }
}
check_file_found(false).then(value => console.log(value))
   .catch(error => console.log(error));