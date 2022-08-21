function checkTime(time){
    if(time<4 && time>=22){
        console.log("night");
    }
    else if(time>4 && time<=12){
        console.log("morning");
    }
    else if(time>12 && time<=16){
        console.log("afternoon");
    }
    else if(time>16 && time<22){
        console.log("evening");
    }
    else{console.log("Invalid Time");}

}
checkTime(6);
checkTime(20);
checkTime(30);
checkTime(14);
