// ES6 Classes - intro

class Task {

}

console.log(typeof Task)

// ! A class is somewhat of a constructor function as in ES5

// => function

class Task {
}

let task = new Task();
console.log(typeof task);

// => object
// it's an instantiated task

console.log(task instanceof Task);

// => true
// we are able to determine the class of an instantiated object

class Task {
	showId() {
		console.log('99');
	}
}
let task = new Task();
task.showId();

// => 99
// this is the most basic form of calling a method on a class

console.log(task.showId === Task.prototype.showId);

// => true
// adding a method to a class is similar to adding the method to the prototype object

class Task {
	constructor() {
		console.log('constructing Task');
	}
	showId() {
        console.log('99');
    }
}

let task = new Task();

// => constructing Task
// by creating a new instance of Task, the constructor is called

class Task {
	constructor() {
		console.log('constructing Task');
	}
	showId() {
        console.log('99');
    }
}

let task = new Task();

// => Syntax error
// we need the commas in object literals but not in classes

class Task {
	constructor() {
		console.log('constructing Task');
	}
	showId() {
        console.log('99');
    }

    taskId = 9000;
}

let task = new Task();

// => Syntax error
// ! the class body is not a place to declare variables

let task = new Task();
class Task {
	constructor() {
		console.log('constructing');
	}
}

// => Error: use before declaration

// ! classes are not hoisted in ES6

let newClass = class Task {
	constructor() {
		console.log('constructing');
	}
}

new newClass();

// => constructing Task
// we can assign classes to variables and use them in expressions in a similar way we can work with functions and constructor functions in ES5

let Task = function () {
	console.log('constructing Task');
}

let task = {};
Task.call(task);

// => constructing Task
// the passed object will become this within the function body

class Task {
	constructor() {
		console.log('constructing Task');
	};
	showId() {
        console.log('99');
    }
}

let task = {};
Task.call(task);

// => Error: class ctor cannot be called with the new keyword
// the difference between actor function in ES5 and the new class in ES6
// we can't call the call function in order to change the this object

function Project() {};

console.log(window.Project === Project);

// => true

// when we create a new actor action without any namespace attached to it it gets placed in the global area

class Task {}

console.log(window.Task === Task);

// => false

// ! if we create a class we don't pollute the global namespace,
// it doesn't get placed in the window object





