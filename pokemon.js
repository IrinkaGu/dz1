class Pokemon {
	constructor(name, level){
		this.name = name;
		this.level = level;
	}
	
	show(){
		console.log(`${this.name}: ${this.level}`);
	}
	
	valueOf() {
        return this.level;
	}
}

class PokemonList  extends Array{
	
	add(name, level){
		let pokemon = new Pokemon (name, level); 
		this.push(pokemon);
	}
	
	show(){
		for (let pokemon of this){
			pokemon.show();
		}
		
		console.log(`Количество элементов: ${this.length}`);
	}
	
	max(){
		return this.reduce((prev, cur) => {
            return cur >= prev
                ? cur
                : prev;
		});
	}
}

var lost;
var found;

let pokemon1 = new Pokemon ("Бульбаза́вр", 1);
let pokemon2 = new Pokemon ("Ивиза́вр", 2);
let pokemon3 = new Pokemon ("Венуза́вр", 3);

let pokemon4 = new Pokemon ("Чарманде́р", 1);
let pokemon5 = new Pokemon ("Чармелео́н", 2);
let pokemon6 = new Pokemon ("Чариза́рд", 3);

let pokemon7 = new Pokemon ("Сквиртл", 1);
let pokemon8 = new Pokemon ("Варто́ртл", 2);
let pokemon9 = new Pokemon ("Бла́стойз", 3);

let pokemon10 = new Pokemon ("Ка́терпи", 1);
let pokemon11 = new Pokemon ("Метапо́д", 2);
let pokemon12 = new Pokemon ("Ба́ттерфри", 3);

let pokemon13 = new Pokemon ("Видл", 1);
let pokemon14 = new Pokemon ("Каку́на", 2);
let pokemon15 = new Pokemon ("Бидри́лл", 3);

let pokemon16 = new Pokemon ("Пи́джи", 1);

lost = new PokemonList(pokemon1, pokemon2, pokemon3, pokemon4, pokemon5, pokemon6, pokemon7, pokemon8);
found = new PokemonList(pokemon9, pokemon10, pokemon11, pokemon12, pokemon12, pokemon13, pokemon14, pokemon15);

lost.add("Пи́джeотто", 2);
lost.add("Пи́джит", 3);

found.add("Раттата", 1);
found.add("Ратикэйт", 2);

let index = 1;
let pokemon = found[index];
found.splice(index, 1);
lost.push(pokemon);

console.log("lost:");
lost.show();
console.log("found:");
found.show();

console.log("Максимальные элементы:");
lost.max().show();
found.max().show();