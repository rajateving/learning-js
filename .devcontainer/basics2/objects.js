// when we make an object through a constructor then it is called singleton
//it is constructor
const mysym = Symbol("key1");
const jsuser = {name :"rajat",
[mysym]:"mykey1",}
//keys are assumed as string automatically//
//two ways to access objects are using dot and using square brackets
 
 console.log(typeof jsuser[mysym])
//object.freeze
// this in javascript
