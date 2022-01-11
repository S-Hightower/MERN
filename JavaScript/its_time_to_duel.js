class Card{
    constructor(name, cost){
        this.name=name;
        this.cost=cost;
    }
}

class Unit extends Card{
    constructor(name,cost,power,res){
        super(name,cost);
        this.power=power;
        this.res=res;
    }

    attack(target){
        target.res -= this.power;
    }
}

class Effect extends Card{
    constructor(name,cost,text,stat,magnitude){
        super(name,cost);
        this.text=text;
        this.stat=stat;
        this.magnitude=magnitude;
    }

    play(target){
        if(target instanceof Unit) {
            console.log(this.text);
            target[this.stat] += this.magnitude;
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

const redBelt = new Unit("Red Belt Ninja", 3, 3, 4);
const blackBelt = new Unit("Black Belt Ninja", 4, 5, 4);

const hardAlgo = new Effect("Hard Algorithm", 2, "Hard Algorithm: increase target's resilience by 3", "res", 3);
const unhandled = new Effect("Unhandled Promise Rejection", 1, "Unhandled Promise Rejection:reduce target's resilience by 2", "res", -2);
const pairprog = new Effect("Pair Programming", 3, "Pair Programming: increase target's power by 2", "power", 2);

//*************Scenario play out******************** */
console.log("------------------------------")
//	Make an instance of "Hard Algorithm" and play it on "Red Belt Ninja"
console.log("Current Stats:")
console.log(redBelt);
hardAlgo.play(redBelt);
console.log(redBelt);

console.log("------------------------------")
//Make an instance of "Unhandled Promise Rejection" and play iton "Red Belt Ninja"
console.log("Current Stats:")
console.log(redBelt);
unhandled.play(redBelt);
console.log(redBelt);

console.log("------------------------------")
//Make an instance of "Pair Programming" and play it on "Red Belt Ninja"
console.log("Current Stats:")
console.log(redBelt);
pairprog.play(redBelt);
console.log(redBelt);

console.log("------------------------------")
//"Red Belt Ninja" uses the attack method on "Black Belt Ninja"
console.log("Current Stats:")
console.log(blackBelt);
console.log(redBelt);
console.log("----------Red Belt Attacked!---------");
redBelt.attack(blackBelt);
console.log(blackBelt);