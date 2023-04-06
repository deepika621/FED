const readline = require("readline");

const rlInterface = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
rlInterface.question("Enter a Number : ",(answer)=>{
    console.log(answer);
    rlInterface.close();
})