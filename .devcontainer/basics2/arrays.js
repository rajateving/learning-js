// array copies when made are shallow
// push pop unshift shift
// some methods ar question methods like includes index of 
//splice original array is manipualated by splice method
// .push  can take the whole array as a datatype whilw merging
//.concat returns the new array
// we can use spread also for this thing
//.flat spreads out the array
//array .from converts a input to arrray
// if array.from cant do it then empty array is returned
//array.of can make array from given elements
const nums = [1, 2, 3];
const doubled = Array.from(nums, num => num * 2);
console.log(doubled); // Output: [2, 4, 6]
const set = new Set([1, 2, 3]);
const arrFromSet = Array.from(set);
console.log(arrFromSet); // Output: [1, 2, 3]