//constructors take some values as arguments and assigns the values to the properties created using this keyword. it is automatically started when a new object is created using class method.
class person_info{
    constructor(name, id, followers, posts){
        this.name = name;
        this.id = id;
        this.followers = followers;
        this.posts = posts;
    }
    greet(){
        console.log(`Hello my name is ${this.name}. I have ${this.followers}. My id is ${this.id}. I have made ${this.posts} posts.`);
    }
}
const person1 = new person_info("Jack", "#jack", 2568, 75);
person1.greet();