// ES6 Modules


// file base.js:

import { projectId } from 'module1.js';
console.log(projectId);

// file module1.js

export let projectID = 99;

// => 99

// file base.js:
import { projectId, projectName } from 'module1.js'
console.log(`${projectName} has id: ${projectId}`);

// file module1.js:
export let projectId = 99;
export let projectName = 'BuildIt';

// => BuildIt has id: 99

// file base.js:
export { projectId as id, projectName } from 'module1.js'
console.log(`${projectName} has id: ${id}`);

// file module1.js
export let projectId = 99;
export let projectName = 'BuildIt';

// => BuildIt has id: 99

// file base.js:
import { projectId as id, projectName } from 'module1.js'
console.log(`${projectName} has id: ${ projectId }`);

// => Runtime error: projectId is undefined 
// !once we set an alias, we need to use the alias

// Hoisting
// - import statements get hoisted, dependencies will execute first

// file base.js:
console.log('beginning of base.js');
import { projectId } from 'module1.js'
console.log('end of base.js');

// file module.js:
export let projectId = 99;
console.log('in base.js');

// => 	in base js
// 	beginning of base.js
// 	end of base.js

// module1.js gets executed first and then base.js gets executed

// file base.js
import someValue from 'module1.js'
console.log(someValue);

// file module1.js
export let projectId = 99
let projectName = 'BuildIt'
export default projectName;

// => someValue
// If we leave off the curly braces in the import, the module loader will look for the default export
// We can also show that we want to use the default by using curly braces and the default key work

// file base.js
import { default as myProjectName } from 'module.js'
console.log(myProjectName);

// file module1.js
export let projectId = 99
let projectName = 'BuildIt'
export default projectName;

// => BuildIt

f// ile base.js
import someValue from 'module1.js'
console.log(someValue)

// file module1.js
let projectId = 99
let projectName = 'BuildIt'
export { projectId, projectName }

// => undefined
// It's ambiguous what should be loaded because there is no default

// file base.js
import someValue from 'module1.js'
console.log(someValue)

module1.js
let projectId = 99
let projectName = 'BuildIt'
export { projectId as default, projectName}

// => 99

// file base.js 
import * as values from 'module1.js'
console.log(values)

// file module1.js
let projectId = 99
let projectName ='BuildIt'
export { projectId, projectName }

// => { projectId: 99, projectName: 'BuildIt' }
// When we import everything with '*', we have to give it an alias and the alias will be an object with the properties the exports from module1.js. We access them as values.projectId or alias.projectName

// Named Exports

// file base.js
import { projectId } from 'module1'
projectId = 8000
console.log(projectId)

// module1.js
export let projectId =99

// => projectId is readonly 

// file base.js
import {project} from 'module1'
project.projectId = 8000
console.log(project.projectId)

// file module1.js
export let project  = {
projectId: 99}

// => 8000
// we can modify the object's properties (project.projectId)

// file base.js
import {project, update} from 'module1.js'
console.log(project.projectId)
update()
console.log(project.projectId)

// file module1.js
export let project = {
projectId: 99 }

export function update() {
project.projectId = 2000
}

// file base.js
import {project, showProject} from 'module1.js'
project.projectId = 8000
showProject()
console.log(project.projectId)

// file module1.js
export let project = {
projectId: 99
}

export function showProject() {
console.log(project.projectId)
}

// =>	8000
// 	8000

// file base.js
import {showProject, updateFunction } from 'module1.js'
showProject()
updateFunction()
showProject()

// file module1.js
export function showProject() {
	console.log('in original')
}

export function updateFunction() {
	showFunction = function() {
		console.log('in updated')
	}
}

// =>	'in original'
// 	'in updated'

// ! named exports = we are only exporting the name of the function, not the actual function