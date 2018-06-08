// ES Classes - extends and super

// ! the inheritance mechanism is the same as in ES5 using prototypes
 
// * extends - use it on a class to set the prototype
// * super - in a constructor or in a function of a class we can use it to explicitly access a function in a prototype

class Project {
	constructor() {
		console.log('constructing Project');
	}
}

class SoftwareProject extends Project {
}

let p = new SoftwareProject();

// => constructing Project
// even though SoftwareProject doesn't have a constructor and a method, it does extend Project - and the constructor of Project will be called

class Project {
	constructor(name) {
		console.log(`constructing Project: ${name}`);
	}
}

class SoftwareProject extends Project {
}

let p = new SoftwareProject('Mazatlan');

// => constructing Project: Mazatlan
// even if SoftwareProject doesn't have a constructor it will the Project constructor with a parameter

class Project {
	constructor() {
		console.log('constructing Project');
	}
}

class SoftwareProject extends Project {
	constructor() {
		super();
		console.log('constructing SoftwareProject');
	}
}

let p = new SoftwareProject();

// => 	constructing Project
// 	constructing SoftwareProject
// by calling super in the constructor of SoftwareProject, the JS engine will know when to instantiate Project and call it's constructor. so Project's constructor will log out the string first because of the super call

class Project {
	constructor() {
		console.log('constructing Project');
	}
}

class SoftwareProject extends Project {
	constructor() {
		// super();
		console.log('constructing SoftwareProject');
	}
}

let p = new SoftwareProject();

// => Reference error: this is not defined
// if SoftwareProject will have a constructor it needs to call super; that's when JS know to instantiate a new prototype object; if you don't want to call super, leave the constructor out


class Project {
	//constructor() {
	//	console.log('constructing Project');
	//}
}

class SoftwareProject extends Project {
	constructor() {
		// super();
		console.log('constructing SoftwareProject');
	}
}

let p = new SoftwareProject();

// => RefernceError: this is not defined
// we still need the call to super, even though Project doesn't have a constructor

class Project {
	getTaskCount() {
		return 50;
	}
}

class SoftwareProject extends Project {
}

let p = new SoftwareProject();
console.log(p.getTaskCount());

// => 50
// SoftwareProject doesn't have the method getTaskCount, but it extends Project,  which becomes the prototype, that does have the method

class Project {
	getTaskCount() {
		return 50;
	}
}

class SoftwareProject extends Project {
	getTaskCount() {
		return 66;
	}
}

let p = new SoftwareProject();
console.log(p.getTaskCount());

// => 66
// even though we're overriding the prototype we don't need to specify any kind of override syntax; we can just create getTaskCount which will automatically override Project's getTaskCount

class Project {
	getTaskCount() {
		return 50;
	}
}

class SoftwareProject extends Project {
	getTaskCount() {
		return super.getTaskCount() + 6;
	}
}

let p = new SoftwareProject();
console.log(p.getTaskCount());

// => 56

// by calling super.getTaskCount() the JS engine it will look up the prototype chain for a getTaskCount() and it finds it in Project

let project = {
	getTaskCount() { return 50; }
};
let softwareProject = {
	getTaskCount() { return super.getTaskCount() + 7;}
}

Object.setPrototypeOf(softwareProject, project);
console.log(softwareProject.getTaskCount());

// => 57
// using super is valid with object literals

