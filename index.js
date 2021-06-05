let language1 = 'Java';
let language2 = "Script";
//a) Use string concatenation and two .slice() methods to print 'JS' from 'JavaScript'.
console.log((language1.slice(0,1)).concat(language2.slice(0,1)));


//b) Without using .slice(), use method chaining to accomplish the same thing.

console.log((language1.charAt(0)).concat(language2.charAt(0)));

//c) Use bracket notation and a template literal to print "The abbreviation for 'JavaScript' is 'JS'."
let language = 'JavaScript';
let firstLetterJava = language[0];
let firstLetterScript = language[4];

console.log(`The abbreviation for ${language} is ${firstLetterJava + firstLetterScript}.`);


//d) Just for fun, try chaining 3 or more methods together, and then print the result.
console.log(`${language1.toUpperCase()} ${language1.slice(1,3).repeat(5).toLowerCase()} ${language1.toUpperCase().concat(language2)}`);