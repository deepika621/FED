function lowerUpperTriangleSum(matrix){
    let upperSum=0;
    let lowerSum=0;
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<=i;j++){
            lowerSum+=matrix[i][j]
        }
        for(let j=i;j<matrix[i].length;j++){
            upperSum+=matrix[i][j]
        }
    }
    console.log("Upper Triangle Sum:",upperSum);
    //for(let i=0;i<matrix.length;i++){
        //for(let j=0;j<matrix[i].length;j++){
           //if(j<=i){
                //lowerSum+=matrix[i][j]
            //}
        //}
    //}
    console.log("Lower Triangle Sum:",lowerSum)
}
lowerUpperTriangleSum([
    [2,15,4],
    [1,2,15],
    [2,10,7]
])