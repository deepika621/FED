arr = [
    {Name: "Ram", Salary: 100000},
    {Name: "Ramesh", Salary: 10000},
    {Name: "Rakesh", Salary: 500000},
    {Name: "Riya", Salary: 6500000},
    {Name: "Ritwik", Salary: 45000}
];
//console.log(arr[0]["Salary"]);
function BubbleSort(iarr,k){
    for(var i=0;i<k;i++){
        var isSwapped=false
        for(var j=0;j<iarr.length-1-i;j++){
            if(iarr[j]["Salary"]>iarr[j+1]["Salary"]){
                var temp=iarr[j];
                iarr[j]=iarr[j+1];
                iarr[j+1]=temp;
                isSwapped=true
            }
        }
        if(!isSwapped)
        break;
    }
    return iarr;
    //console.log(arr);
}
var k=2
//var arr=[5,4,3,2,1,6,2]
arr=BubbleSort(arr,k)
console.log(arr[arr.length-2])