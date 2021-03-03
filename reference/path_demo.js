const path = require('path');

//Base File name;
console.log(__filename);
console.log(path.basename(__filename));

//Directory 
console.log(path.dirname(__filename));

//File extension
console.log(path.extname(__filename));

// Create path object 
console.log(path.parse(__filename));
console.log(path.parse(__filename).base);

//Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html')); //Works with delimiter

