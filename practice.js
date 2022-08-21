
function children(temp,isRaining){
if((temp>=20 && temp<=25)&& !isRaining)
{
    console.log("children can go out and play");
}
else if((temp>=18 && temp<=20)&& isRaining){
    console.log("stay inside play school")
}
else{
    console.log("go home and stay there")
}
}
children(21,true)
children(19,true)
children(21,false)
children(19,false)
