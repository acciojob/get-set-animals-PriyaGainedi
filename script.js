//complete this code
class Animal {
	constructor(species){
		this.species = species;
	}
    get animalSpecies(){
        return this.species;
    }
	makeSound(){
		console.log("The Siamese makes a sound");
	}
}

class Dog extends Animal {
	constructor(species){
		super(species);
	}
	bark(){
		console.log("The Golden Retriever makes a sound");
	}
}

class Cat extends Animal {
	constructor(species){
		super(species);
	}
	purr(){
		console.log("purr");
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
