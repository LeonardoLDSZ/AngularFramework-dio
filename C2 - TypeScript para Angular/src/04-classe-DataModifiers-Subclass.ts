// SubClasses
//Classe que herda de outra classe
class Character {
    protected name?:string;
    strength: number;
    skill:number;

        constructor(name: string, strength: number, skill: number) {
            this.name = name;
            this.strength = strength;
            this.skill = skill;
        }

        attack(): void{
            console.log(`Attack with ${this.strength} points`);
        }
    }

    //Character: superclass => classe pai
    //Magician: Subclass
class Magician extends Character { //herda da classe Character
    magicPoints: number;
    constructor(
        name:string, 
        strength: number, 
        skill: number, 
        magicPoints:number
    ){
        super(name,strength, skill) //invoca o construtor da classe pai
        this.magicPoints = magicPoints;
    }
}

const p1 = new Character("Mocojin",10, 98);
const p2 = new Magician("Heyachi",11, 44,100);
p1.skill = 12;