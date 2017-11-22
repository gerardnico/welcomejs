# Welcome Library

## Introduction

The `welcome` Library is a minimal (getting started) javascript library that will welcome you from two modules.


The story (or blog) over this repository can be found here:

  * [Javascript - Getting Started - How to develop, publish and use a library ?](https://gerardnico.com/wiki/lang/javascript/library_build)

This repository will build a library:
  * exposed as the global variable `welcome`
  * saved in the file `prefix-welcome.js`
  * aggregating two modules (`foo` and `bar`)
  
## Output 

The output from the browser or from Node will be 
```text
Welcome from the foo package !
A warm Welcome from the bar package !
```

## Usage

### Node
See the file [welcomeLibInNode.js](./example/welcomeLibInNode.js)
```javascript
var welcome = require("../dist/prefix-welcome");
console.log(welcome.foo());
console.log(welcome.bar());
```
### Browser

See the file [welcomeLibInBrowser.html](./example/welcomeLibInBrowser.html)
```html
<html>
<!--
If published in Node
<script src="https://unpkg.com/myLibrary"></script>
Otherwised locally
-->
<script src="../dist/prefix-welcome.js"></script>
<body>
</body>
<script>
    // Global variable
    var welcomeFoo = welcome.foo();
    // Property in the window object
    var welcomeBar = window.welcome.bar();
    document.body.innerHTML = "<h2>"+welcomeFoo+"</h2><h2>"+welcomeBar+"</h2>";
</script>
</html>
```

