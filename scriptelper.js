class Scriptelper {
	//DOM SELECTOR FUNCTIONS
find(selector) {
if (!selector) { throw new Error(
  'Please provide a CSS or normal selector. Example: help.find("#title") or ("title")'
); }

return document.querySelector(selector);
		};
findAll(selector){
if (!selector) { throw new Error(
  'Please provide a CSS or normal selector. Example: help.find("#title") or ("title")'
); }
	return document.querySelectorAll(selector)
};
getElement(target) {
	const el =  typeof target === "string" ?
		this.find(target) :
		target;
if(!el){
throw new Error(
  'Could not find the target element. Check that the selector exists in your HTML.'
);
}
return el
}
//Text and HTML
text(target , text){
let el	= this.getElement(target);

if (text=== undefined) {
throw new Error(
  'Please provide text to display. Example: help.text("#title", "Hello World")'
);
};
el.textContent= text;
}
html(target, html){
let el	= this.getElement(target);

if (html=== undefined) {
throw new Error(
	'Please provide HTML content. Example: help.html("#box", "<b>Hello</b>")'
);
};
el.innerHTML= html;
}

//Event Action
on(target, event, callback){
let el = this.getElement(target);

if (!event) {
	throw new Error(
	'Please provide an event name. Example: "click", "input", or "submit".'
);
};	
if(!callback){
	throw new Error(
    'Please provide a callback function to run when the event occurs.'
);
}
el.addEventListener(event, callback)
}
//Classes
addClass(target, className){
	let el = this.getElement(target);

if(className === undefined||className === null){
	throw new Error(
	'Please provide a valid class name. Example: help.addClass("#box", "active")'
);
	
}
el.classList.add(className);
}
removeClass(target, className) {
let el = this.getElement(target);

if (className === undefined || className === null) {
		throw new Error(
	'Please provide a valid class name. Example: help.addClass("#box", "active")'
);
		
	}
el.classList.remove(className);
}
toggleClass(target, className) {
	let el = this.getElement(target);
	

	
	if (className === undefined || className === null) {
		throw new Error(
	'Please provide a valid class name. Example: help.addClass("#box", "active")'
);
	}
	
	el.classList.toggle(className);
}
replaceClass(target , oldClass, newClass){
let el = this.getElement(target);
	

if(!oldClass || !newClass){
	throw new Error(
	'Please provide both old and new class names. Example: help.replaceClass("#box", "inactive", "active")'
);
}
el.classList.replace(oldClass, newClass)
}
toggle(target){
	let el = this.getElement(target);

	let display = getComputedStyle(el).display
	if (display=== 'block') {
		el.style.display='none';
	}
	 else {
	 	el.style.display='block';
	 }
}
//Local Storage 
store(key, value){
	if (!key) {
throw new Error(
    'Please provide a key to store data in Local Storage.'
);

	}
	if (value=== undefined) {
	throw new Error(
    'Please provide a value to store in Local Storage.'
);
}
localStorage.setItem(key, JSON.stringify(value))
}
load(key){
if (!key) {
throw new Error(
    'Please provide a key to get data back from Local Storage.'
);
}
return JSON.parse(localStorage.getItem(key))
}
remove(key){
if (!key) {
throw new Error(
	'Please provide a key to remove data from Local Storage.'
);
}
localStorage.removeItem(key);
}
clear(){
	localStorage.clear();
}
// Fetch
 async getData(api){
 	if (!api) {
 		throw new Error(
    'Please provide a URL. Example: help.getData("https://api.example.com")'
);
 	}
	const res = await fetch(api);
if (!res.ok) {
	throw new Error(
	`Unable to fetch data. The server returned status ${res.status} (Not Found or Server Error).`
);
}
	return await res.json();
}
async postData(api, data ){
 	if (!api) {
throw new Error(
 'URL is required to send data. Example: help.postData("https://api.example.com")'
);
 	}
 if (!data || typeof data !=="object") {
    throw new Error("Data must be a valid object.");
}
const   res = await fetch(api,{
method: 'POST',
headers:{
	'Content-Type': 'application/json'},
body: JSON.stringify(data)
	});
if (!res.ok) {
	throw new Error(
	`Unable to post data. The server returned status ${res.status} .`
);
}
return await res.json();
}
//Create
create(elName, target) {
    if (!elName) {
        throw new Error(
            'Please provide a tag name. Example: help.create("div")'
        );
    }

    if (typeof elName !== "string") {
        throw new Error(
            'Tag name must be a text value. Example: help.create("div")'
        );
    }

    const el = document.createElement(elName);

    if (target !== undefined) {
        const parent = this.getElement(target);
        parent.appendChild(el);
    }

    return el;
}
	}
