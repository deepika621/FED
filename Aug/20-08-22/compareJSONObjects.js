var isEqual = (p1 , p2) => {
    keys1 = Object.keys(p1);
    keys2 = Object.keys(p2);
    return keys1.length === keys2.length && Object.keys(p1).every(key => p1[key] = p2[key]);
}
var p1 = {
    name : "Deepika",
    age : 23,
    country : "India" 
};
var p2 = {
    age : 22,
    name : "Shirisha",
    country : "India" 
};
console.log(isEqual(p1,p2));