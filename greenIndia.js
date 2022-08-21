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
const deepikaObj = new Environmentalist("Deepika","India");
deepikaObj.surveyArea();
deepikaObj.showAlert();
deepikaObj.plantTrees();
const tulasiObj = new Environmentalist("Tulasi","USA");
tulasiObj.surveyArea();
