function getElement(t){
const el=typeof t==='string'?document.querySelector(t): t;
if (!el) {
	throw new Error('HTML Element not found')
}
return el;
   }
class ElementWrapper {
        constructor(el) {
                this.el = el
        }
   
 text(value) {
        if (value === undefined || value === null) {
                throw new Error(
                        'Please provide text to display. Example: el.text( "Hello World")'
                );
        };
        this.el.textContent = value;
        return this;
}
html(html) {
        
        
        if (html === undefined || html === null) {
                throw new Error(
                        'Please provide HTML content. Example: el.html( "<b>Hello</b>")'
                );
        };
        this.el.innerHTML = html;
        return this;
}
addClass(className){
	

if(className === undefined||className === null|| className === ''){
	throw new Error(
	'Please provide a valid class name. Example: el.addClass( "active")'
);
	
}
this.el.classList.add(className);
return this;
}
removeClass(className) {


if (className === undefined||className === null|| className === '') {
		throw new Error(
	'Please provide a valid class name. Example: el.removeClass( "active")'
);
		
	}
this.el.classList.remove(className);
return this;
}
toggleClass(className) {
	
if (className === undefined||className === null|| className === '') {
		throw new Error(
	'Please provide a valid class name. Example: el.toggleClass( "active")'
);
	}
	
	this.el.classList.toggle(className);
	return this;
}
replaceClass(  oldClass, newClass){

	

if(!oldClass || !newClass ){
	throw new Error(
	'Please provide both old and new class names. Example: help.replaceClass("#box", "inactive", "active")'
);
}
this.el.classList.replace(oldClass, newClass)
return this;
}
toggle(){
	

	const display = getComputedStyle(this.el).display
	if (display=== 'none') {
		this.el.style.display='';
	}
	 else {
	 	this.el.style.display='none';
	 }
	 return this;
}
on( event, callback){


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
if (!this.el.events) {
this.el.events={}
}if(!this.el.events[event])
{this.el.events[event]=[];};
this.el.events[event].push(callback)
this.el.addEventListener(event, callback)
return this
}
off(event, callback) {
	if (!event) {
		throw new Error(
			'Please provide an event name.'
		);
	}
	
	if (!this.el.events?.[event]) {
		return this;
	}
	
	// Remove all handlers
	if (callback === undefined) {
		this.el.events[event].forEach(fn => {
			this.el.removeEventListener(event, fn);
		});
		
		delete this.el.events[event];
		return this;
	}
	
	// Remove one handler
	this.el.removeEventListener(event, callback);
	
	this.el.events[event] =
		this.el.events[event].filter(fn => fn !== callback);
	
	if (this.el.events[event].length === 0) {
		delete this.el.events[event];
	}
	
	return this;
}
value(v){
    if (v=== undefined) {
        return this.el.value
    }
    if (v=== undefined || v=== null || typeof v === 'object') {
        throw new Error('Provided value must be a string . Ex:- el.value("Hello")')
    }
    this.el.value=v;
    return this;
}
appendTo(parent){
    if (!parent) {
throw new Error('Provide a parent to append Ex:- el.append("div")')
    }
const p = getElement(parent);
    p.appendChild(this.el)
    return this;
}
attr(name, value){
    if (!name) {
    throw new Error(
        'Please provide an attribute name. Example: el.attr("id")'
    );
}
if (value=== undefined) {
    return this.el.getAttribute(name)
}
this.el.setAttribute(name,value)
return this;
}
remove(){
	this.el.remove()
	return this
}
}
class Scriptelper {
       
       
   
	//DOM SELECTOR FUNCTIONS
find(selector) {
if (!selector) { throw new Error(
  'Please provide a CSS or normal selector. Example: help.find("#title") or ("title")'
); }
const el = document.querySelector(selector);
if (!el) {
    throw new Error('Element not found . please check your html that element exist or not')
}
return new ElementWrapper(el);
        

		};
findAll(selector){
if (!selector) { throw new Error(
  'Please provide a CSS or normal selector. Example: help.find("#title") or ("title")'
); }
	const els =  document.querySelectorAll(selector);
	if (els.length=== 0) {
	    throw new Error('Elements not found . please check your html that element exist or not')
	}
	const wrappers = [];

for (let i = 0; i < els.length; i++) {
	wrappers.push(new ElementWrapper(els[i]));
}

return wrappers;
};

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
removeItem(key){
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
        const parent = getElement(target);
        parent.appendChild(el);
    }

    return new ElementWrapper(el);
}

	}
window.$= new Scriptelper();	
