//1.Map Function
//const studentIDs=[2,9,43,90,45,32,89,76];
//console.log(studentIDs.map((num)=>num*2))

//function multiplyby2(array){
   // const result=[];
   // for(i=0;i<array.length;i++){
    //    result.push(array[i]*2);
   // }
   // console.log(result);
//}
//multiplyby2(studentIDs)

//const students=["Deepika","Usha","Ram","Hemanth","Krishna"];
//console.log(students.filter((name)=>name.length<=5))
const students=[
    {"Name":"Deepika",age : 22},
    {"Name":"Ram",age : 28},
    {"Name":"Usha",age : 30},
    {"Name":"Hemanth",age : 19},
    {"Name":"Eshwar",age : 23},
    {"Name":"Lava",age : 26}
]
console.log(students.filter((obj)=>obj.age>23))