const arr =[1,2,3,4,5]
for(const nus of arr){console.log(nus)}
//maps will have unique values
const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);
for(const [ke,valu] of map1){console.log(ke,':-',valu)}
//for of doesnt work in object and for in doesnt work in maps
const myobject = {js: "javascript",
rb:"ruby"}
for (const shu in myobject){console.log(`${shu}`)}
//foreach has a cal back function
//the fnction name in call back is not avlbl
//iterable variable is passed in it 
