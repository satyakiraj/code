//classes are like the blueprint to how to create a object it defines the properties and method it will have and uses a constructor for similar properties
class player{
  score = 0;
  paused(){
    console.log(`you've paused the game at a score of ${this.score}`);
  }
  exit(){
    console.log(`you've exi  ed the game at ${this.score}`);
  }
}
//to createw a object using a class we use the new keyword followed by the class name
const player1 = new player();
const player2 = new player();
player1.score += 1;
player2.score += 1;
player1.paused();
player2.paused();
player1.exit();
player2.exit();