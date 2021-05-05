class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, resilience, power) {
        super(name, cost);
        this.resilience = resilience;
        this.power = power;
    }
    attack(target) {
        if (target instanceof Unit) {
            target.resilience -= this.power;
        } else {
            throw new Error("Target must be a unit!");
        }
    }
}

class Effect extends Card {
    constructor(name, cost, stat, magnitude) {
        super(name, cost);
        this.stat = stat;
        this.magnitude = magnitude;
        magnitude > 0
            ? (this.text = `Increase target's ${this.stat} by ${this.magnitude}`)
            : (this.text = `Decrease target's ${this.stat} by ${this.magnitude}`);
    }
    play(target) {
        if (target instanceof Unit) {
            if (this.stat.toLowerCase() == "resilience") {
                target.resilience += this.magnitude;
            } else if (this.stat.toLowerCase() == "power") {
                target.power += this.magnitude;
            } else {
                console.log("What to do?");
            }
        } else {
            console.log("Nope");
        }
    }
}
const u1 = new Unit("red belt ninja", 3, 3, 4);
const u2 = new Unit("black belt ninja", 4, 5, 4);
// u1.attack(u2);

// console.log(u1);
// console.log(u2);

const e1 = new Effect("hard algo", 2, "resilience", 3);
const e2 = new Effect("unhandled promise rejection", 1, "resilience", -2);
const e3 = new Effect("pair programming", 3, "power", 2);
// u1.attack(e1);
// console.log(e1);
// console.log(e2);
// console.log(e3);
e1.play(u1);
console.log(u1);
e2.play(u1);
console.log(u1)
e3.play(u1);
console.log(u1);
u1.attack(u2);
console.log(u2);
