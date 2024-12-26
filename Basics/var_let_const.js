const rollNo = "2201060000" // it is a constant variable
let name = "Roy"; // it is a block scoped variable
var age = "25"; // it is a function scoped variable
courseId = "ETCS110A"; //it is allowed in js but not recommended 

// rollNo = "11221122"; //not allowed

name = "john";

courseId = "ETCS1212A";
age = "21";

console.log(rollNo);

// console.table({}) is used to display data in tabular format in one go
console.table({rollNo, name, age, courseId});
