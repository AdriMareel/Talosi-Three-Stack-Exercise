//création de la classe et implémentation des méthodes pour ajouter ou supprimer
//un élément à une des stacks
class ThreeStack {
	constructor() {
		this.stack1 = new Array();
		this.stack2 = new Array();
		this.stack3 = new Array();
	}

	//ajout d'un élément dans une stack
	push(stackName, object) {
		if (stackName == 1) {
			this.stack1.push(object);
		}
		else if (stackName == 2) {
			this.stack2.push(object);
		}
		else if (stackName == 3) {
			this.stack3.push(object);
		}
	}

	//suppression d'un élément dans une stack
	pop(stackName) {
		if (stackName == 1) {
			if (this.stack1.length == 0) {
				throw new Error("La pile 1 est vide");
			}
			else return this.stack1.pop();
		}
		else if (stackName == 2) {
			if (this.stack2.length == 0) {
				throw new Error("La pile 2 est vide");
			}
			else return this.stack2.pop();
		}
		else if (stackName == 3) {
			if (this.stack3.length == 0) {
				throw new Error("La pile 3 est vide");
			}
			else return this.stack3.pop();
		}

		else throw new Error("La pile " + stackName + " n'existe pas");
	}
}

let threeStack = new ThreeStack();

threeStack.push(1, { name: "object1" });
threeStack.push(1, { name: "object2" });
threeStack.push(2, { name: "object3" });
threeStack.push(2, { name: "object4" });
threeStack.push(2, { name: "object5" });
threeStack.push(3, { name: "object6" });
threeStack.push(3, { name: "object7" });

/*
console.log(threeStack.pop(2)); // display {name:"object5"}
console.log(threeStack.pop(2)); // display {name:"object4"}
console.log(threeStack.pop(1)); // display {name:"object2"}
console.log(threeStack.pop(1)); // display {name:"object1"}
console.log(threeStack.pop(3)); // display {name:"object7"}
console.log(threeStack.pop(1)); // throw Exception
console.log(threeStack.pop(4)); // throw Exception
*/