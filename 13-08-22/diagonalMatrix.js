function isDiagonalMatrix(matr){
    for(let i=0;i<matr.length;i++){
        for(let j=0;j<matr[i].length;j++){
            if(i!=j && matr[i][j]!=0){
                return false;
            }
        }
    }
    return true;
}
const matrix =[
    [1,0,0,0],
    [0,2,0,0],
    [0,0,3,0],
    [0,0,0,4]
]
const matrix1=[
    [1,0,0,0],
    [0,0,0,0],
    [0,0,3,0],
    [0,0,0,4]
]
const matrix2=[
    [1,0,0,5],
    [0,2,0,0],
    [0,0,3,0],
    [0,0,0,4]
]
console.log(isDiagonalMatrix(matrix2))