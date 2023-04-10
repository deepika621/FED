const students = [
    {
        "fname" : "Deepika",
        "lname" : "Kasarla"
    },
    {
        "fname" : "Hemamth",
        "lname" : "Kasarla"
    },
    {
        "fname" : "Shirisha",
        "lname" : "Geddam"
    },
    {
        "fname" : "Akshitha",
        "lname" : "Palla"
    },
    {
        "fname" : "Sowmya",
        "lname" : "Kandukuri"
    },
    {
        "fname" : "Usha",
        "lname" : "Surarapu"
    },
    {
        "fname" : "Ulisha",
        "lname" : "Midthanapally"
    },
    {
        "fname" : "Urmila",
        "lname" : "Midthanapally"
    },
    {
        "fname" : "Upender",
        "lname" : "Midthanapally"
    }
]
//console.log(students); 
const nameWithU = students.filter((obj)=>obj.fname.startsWith("U"));
console.log(nameWithU);
const nameWithD = students.find((obj)=>obj.fname.startsWith("D"));
console.log(nameWithD);