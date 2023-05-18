function printWaveMatrix(matrix){
    let colLength=matrix[0].length;
    for(let col=0;col<colLength;col++){
    if(col%2==0){
    for(let row=0;row<matrix.length;row++){
        console.log(matrix[row][col])
    }
}else{
    for(let row=matrix.length-1;row>=0;row--){
        console.log(matrix[row][col])
    }}}
    //startCol=startCol+1;
    

}
printWaveMatrix([[ 1, 2, 3, 4 ],
	[ 5, 6, 7, 8 ],
	[ 9, 10, 11, 12 ],
	[ 13, 14, 15, 16 ]])      