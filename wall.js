let L=24;
let B=8;
let T=0.6;
let brickvolume=24*12*8;
let motorpercent=15;
let wallvolume=L*B*T;
function wall(L,B,T){
    bricks=(((100-motorpercent)/100)*(wallvolume)*(100*100*100))/(brickvolume);
    console.log(Math.round(bricks));
}
wall();