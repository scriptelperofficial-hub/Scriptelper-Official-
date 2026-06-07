# **Scriptelper**

**A beginner-friendly JavaScript library for DOM manipulation, Local Storage, and Fetch requests.**

Scriptelper is a lightweight JavaScript library designed to make working with the DOM easier, more readable, and less intimidating for new developers.

---

# **Why Scriptelper?**

JavaScript's DOM API is powerful, but beginners often find it repetitive and confusing.

Instead of writing:

```js
document.querySelector("#title").textContent = "Hello World";
```

You can write:

```js
help.text("#title", "Hello World");
```

Scriptelper focuses on:

- Simplicity
- Readability
- Beginner-friendly APIs
- Clear error messages
- Lightweight design

---

# **Features**

- DOM Selection
- Text Manipulation
- HTML Manipulation
- Event Handling
- CSS Class Helpers
- Show / Hide Elements
- Local Storage Helpers
- Fetch API Helpers
- Element Creation
- Beginner-Friendly Error Messages

---

# **Installation**

Include the file in your HTML:

```html
<script src="scriptelper.js"></script>
```

---

### Create an instance:

```js
const help = new Scriptelper();
```

---

# **Methods**

## `find()`

Returns the first matching element.

### Syntax

```js
help.find(selector);
```

### Example

```js
help.find("#title");
help.find(".card");
help.find("button");
```

---

## `findAll()`

Returns all matching elements.

### Syntax

```js
help.findAll(selector);
```

### Example

```js
help.findAll(".card");
```

---

## `text()`

Sets the text content of an element.

### Syntax

```js
help.text(target, text);
```

### Example

```js
help.text("#title", "Welcome");
```

---

## `html()`

Sets HTML content inside an element.

### Syntax

```js
help.html(target, html);
```

### Example

```js
help.html("#box", "<b>Hello World</b>");
```

---

## `on()`

Adds an event listener.

### Syntax

```js
help.on(target, event, callback);
```

### Example

```js
help.on("#btn", "click", () => {
  console.log("Button clicked");
});
```

---

## `addClass()`

Adds a CSS class.

```js
help.addClass("#box", "active");
```

---

## `removeClass()`

Removes a CSS class.

```js
help.removeClass("#box", "active");
```

---

## `toggleClass()`

Adds a class if it doesn't exist and removes it if it does.

```js
help.toggleClass("#box", "active");
```

---

## `replaceClass()`

Replaces one class with another.

```js
help.replaceClass("#box", "old", "new");
```

---

## `toggle()`

Shows or hides an element.

```js
help.toggle("#menu");
```

---

## `create()`

Creates a new HTML element.

```js
const div = help.create("div");
```

Create and append directly:

```js
help.create("p", "#container");
```

---

# **Local Storage**

## `store()`

Stores data in Local Storage.

```js
help.store("username", "Samad");
```

---

## `load()`

Retrieves data from Local Storage.

```js
const username = help.load("username");
```

---

## `remove()`

Removes a stored item.

```js
help.remove("username");
```

---

## `clear()`

Clears all Local Storage data.

```js
help.clear();
```

---

# **Fetch Helpers**

## `getData()`

Fetches data from an API.

```js
const users = await help.getData(
  "https://jsonplaceholder.typicode.com/users"
);
```

---

## `postData()`

Sends data using a POST request.

```js
await help.postData(
  "https://jsonplaceholder.typicode.com/users",
  {
    name: "Samad"
  }
);
```

---

# **Supported Targets**

### CSS Selector

```js
help.text("#title", "Hello");
```

### DOM Element

```js
const title = help.find("#title");
help.text(title, "Hello");
```

---

# **Example Project**

### HTML

```html
<h1 id="title">Hello</h1>

<button id="btn">Change Text</button>
```

### JavaScript

```js
const help = new Scriptelper();

help.on("#btn", "click", () => {
  help.text("#title", "Welcome to Scriptelper!");
  help.addClass("#title", "active");
});
```

---

# **Error Handling**

Scriptelper uses beginner-friendly error messages:

```txt
Could not find the target element.
Check that the selector exists in your HTML.
```

```txt
Please provide a valid class name.
```

```txt
Please provide a URL.
Example: help.getData("https://api.example.com")
```

---

# **Roadmap**

- css()
- attr()
- append()
- prepend()
- removeElement()
- animation helpers
- utility functions

---

# **Version**

Current Version:

```txt
v1.0.0
```

---

# **Contributing**

Contributions, ideas, bug reports, and feature requests are welcome.

---

# **License**

MIT License

---

# **About**

Scriptelper is an open-source project focused on making JavaScript easier for beginners.

Built and maintained by Scriptelper Labs.

> Making JavaScript easier, one line at a time.