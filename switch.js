function printResults(grade){
    switch(grade){
        case "A+":
            {
                console.log("Distinction");
                break;
            }
        case "A":
            {
                console.log("First class");
                break;
            
            }
        case "B":
            {
                console.log("Second Class");
                break;
            }
        case "C":
            {
                console.log("pass");
                break;
            }
        case "D":
            {
                console.log("Fail");
                break;
            }
        default:
            {
                console.log("Invalid value");
            }
    }
}
printResults("A+");
printResults("A");
printResults("C");
printResults("E");