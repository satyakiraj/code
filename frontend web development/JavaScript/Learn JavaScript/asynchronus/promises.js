//promises are use to fetch result from an asynchronus process like they were synchronus. It is use to fetch data from server, api or a file. It is like promise to return a vlaue in future.
//it is in 3 state :- pending, fullfill or rejected.
//thre are 2 states in promise :- 1. producing(It is our condition.) 2. the handler section which is use to handle 2 type of cases - 1. when the promise is completed and 2. when the promise is not completed.
const promise = new Promise((resolve, reject) => {
    let file_found = true;
    if (file_found === true) {
        resolve("File Found");
    } else {
        reject("File Not Found");
    }
});
//.then is use to do something when promise is not resolved and .catch is use to do something when promise is not resolved.
promise.then(value => console.log(value))
    .catch(reject => console.log(reject));


const promise2 = time => new Promise((resolve) => {
    setTimeout(() => {
        resolve(time);
    }, time);
});

promise2(4564).then((value) => console.log(`Thanks For waiting ${value / 1000}s`));