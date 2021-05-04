class Ninja {
    constructor(name, health, speed=3, strength=3){
    this.name = name;
    this.health = health;
    this.speed = speed;
    this.strength = speed;
    }

    sayName(){
        console.log(`Ninja's name:${this.name}`);
    }
    showStats(){
        console.log(`${this.name}, ${this.health},${this.strength}, ${this.speed} `);
    }
    drinkSake(){
        this.health += 10
    }
}
class Sensei extends Ninja{
    constructor(name,health,speed, strength, wisdom=10){
        
        super(name,health=200, speed=10, strength=10);
        this.wisdom = wisdom
        
    }
    speakWisdom(){
        super.drinkSake();
        console.log("The more you drink, the better you are")
    }
}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
