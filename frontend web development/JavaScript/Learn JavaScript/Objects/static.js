//static keyword does not belong to the objects created uising class but to the class itself
//in this program we are counting the number of users of my web app
class person_info {
    static number = 0;
    static count_users() {
        person_info.number++;
    };
    constructor(name, id, followers, posts) {
        this.name = name;
        this.id = id;
        this.followers = followers;
        this.posts = posts;
        person_info.count_users();
    }
    greet() {
        console.log(`Hello my name is ${this.name}. I have ${this.followers}. My id is ${this.id}. I have made ${this.posts} posts.`);
    }
}
const person1 = new person_info("Jack", "#jack", 2568, 75);
person1.greet();
const person2 = new person_info("John", "#john", 459, 50);
person2.greet();
const person3 = new person_info("patrick", "#patrick", 1603, 17);
person3.greet();
const person4 = new person_info("Michael", "#michael", 3509, 105);
person4.greet();
console.log(person_info.number);