function extend(child, parent) {
  if (child instanceof Object && parent instanceof Object) {
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
  }
}

function Animal(name) {
  this.name = name;
}
Animal.prototype.name = undefined;
Animal.prototype.speak = function () {
  console.log("...");
};

function Human(name, age) {
  Animal.call(this, name);
  this.age = age;
}
extend(Human, Animal);
Human.prototype.age = undefined;
Human.prototype.speak = function () {
  console.log("Hi!");
};
Human.prototype.introduceSelf = function () {
  console.log("Hi! I'm " + this.name + ", I'm " + this.age + " years old.");
};

let animal = new Animal("Jack");
animal.speak(); // ...
animal = new Human("Lisa", 28);
animal.speak(); // Hi!
animal.introduceSelf(); // Hi! I'm Lisa, I'm 28 years old.
