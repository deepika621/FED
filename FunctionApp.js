var countOfObjects=0
class FunctionApp{
    constructor(){
        countOfObjects++;
    }
    countObjects(){
        console.log("count of objects ="+countOfObjects);
    }
    doLogic2(){
        console.log("Performing Logic 2");
    }
    doLogic3(){
        console.log("performing Logic 3");
        this.doLogic2()
    }
}
const obj1=new FunctionApp;
const obj2=new FunctionApp;
const obj3=new FunctionApp;
obj1.countObjects();
obj1.doLogic3();
