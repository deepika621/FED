function passByReference(array,value){
    array.push(value)
}
const arr=[2,3,4]
passByReference(arr,5)
console.log(arr)
console.log(typeof arr)

function checkForObject(obj){
    obj.age=25;
}
const obj={name:"X",age:20};
let obj2={}
obj2=Object.assign(obj2,obj);
obj2.age=25;
//checkForObject(obj)
console.log(obj)
console.log(obj2)

