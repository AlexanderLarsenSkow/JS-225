class Plant {
	photosynthesize() {
		console.log(`This ${this.constructor.name} is photosynthesizing!`);
	}
}

class Tree extends Plant {

}

class Flower extends Plant {

}

class Grass extends Plant {

}

let tree = new Tree();
tree.photosynthesize();

let flower = new Flower();
flower.photosynthesize();

let grass = new Grass();
grass.photosynthesize();