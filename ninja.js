class Ninja {
    constructor(name){
        this.name=name;
        this.health=0;
        this.speed=3;
        this.strength=3;
    }

    sayName(){
        console.log(this.name);
    }
    
    showStats(){
        console.log(this.name, this.strength, this.speed, this.health);
    }
    
    drinkSake(){
        this.health += 10;
        console.log(this.health);
    }   
}

const ninja1 = new Ninja("Donatello");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();