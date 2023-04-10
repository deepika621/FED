class Environmentalist{
    constructor(name,location){
        this.name=name;
        this.location=location;
    }
    surveyArea(){
        console.log("Area Surveyed by "+this.name);
        return 100;
    }
    showAlert(){
        console.warn("Please Plant more trees");
    }
    plantTrees(){
        console.log("10 trees are planted");
    }
}
//const deepikaObj = new Environmentalist("Deepika","India");
//deepikaObj.surveyArea();
//deepikaObj.showAlert();
//deepikaObj.plantTrees();
const tulasiObj = new Environmentalist("Tulasi","USA");
//tulasiObj.surveyArea();
console.log(tulasiObj);
console.log(tulasiObj instanceof Environmentalist);
//Converts JavaScript Object to JSON String.
const tulasiJsonObj = JSON.stringify(tulasiObj);
console.log(tulasiJsonObj);
console.log(tulasiJsonObj instanceof Environmentalist);
//console.log(Object.keys(tulasiJsonObj));

//Converts JSON String to JavaScript Object.
const tulasiParsedObj = JSON.parse(tulasiJsonObj);
console.log(tulasiParsedObj);
console.log(tulasiParsedObj instanceof Environmentalist);
//It parsed into JavaScript Object but it doesn't know which prototype it belongs to.
console.log(Object.keys(tulasiParsedObj));
