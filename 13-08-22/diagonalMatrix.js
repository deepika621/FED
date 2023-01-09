
function isDiagonalMatrix(mat){
    for(let i=0;i<mat.length;i++){
        for(let j=0;j<mat[i].length;j++){
            if((i!=j) && (mat[i][j]!=0)){
                return false;
            }
        }
    }
    return true;
}

const matrix = isDiagonalMatrix[
    [1,0,0,0],
    [0,2,0,0],
    [0,0,3,0],
    [0,0,0,4]
]
console.log(isDiagonalMatrix(matrix))