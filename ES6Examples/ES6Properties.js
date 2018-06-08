// ES6 - Properties for Class Instances

// - for class instances in ES5 we would use the this keyword often
// - in ES6 what has changed is that we use classes with the constructor as a function and that is where we can nitialize the this object

class Project {
	constructor() { this.location = 'Mazatlan'}
}

class SoftwareProject extends Project {
	constructor() {
		super();
	}
}

let p = new SoftwarePRoject();
console.log(p.location);

// => Mazatlan
// we initialize things in the constructor and we always use this


class Project {
	constructor() { let location = 'Mazatlan'; }
}

class SoftwareProject extends Project {
	constructor() {
		super();
	}
}

let p = new SoftwareProject();
console.log(p.location);

// => undefined
// By using let, const or var in this location, t goes out of scope very quickly,  it won't be attached to instance

class Project {
	constructor() { this.location = 'Mazatlan'; }
}

class SoftwareProject extends Project {
	constructor() {
		super();
		this.location = this.location + 'Beach';
	}
}

let p = new SoftwareProject();
console.log(p.location);

// => Mazatlan Beach

// - the key is to always call super before we access “this”
