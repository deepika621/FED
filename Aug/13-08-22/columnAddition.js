function columnAddition(matrix){
    //let M=matrix.length;
    //let colLength=matrix[0].length;
    const result=[]
    for(let col=0;col<matrix[0].length;col++){
        let sum=0
        for(let row=0;row<matrix.length;row++){
            sum+=matrix[row][col]
        }
    result.push(sum);
}console.log(result)
}
columnAddition([
    [3,4,5],
    [3,4,2],
    [2,3,4],
    [4,4,4]
])