

module.exports = function towelSort(matrix) {

   let totalArr = [];

 
  if (matrix === null || matrix === undefined) {
    totalArr = [];
  } else {

  
    for (let i = 0; i < matrix.length; i++) {

    if (i % 2 === 1) {

      matrix[i] = matrix[i].reverse()

    }

    totalArr = [...totalArr,...matrix[i]];

  }
}

return totalArr;
}
