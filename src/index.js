// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix || matrix.length === 0) {
        return [];
    }

    function revers() {
        for (let i = 0; i < matrix.length; i++) {
            //reverse odd elements.
            if (i % 2 === 1) {
                return matrix[i].reverse();
            }
        }
        return matrix;
    }
    revers();

    let arr = [];

    matrix.reduce(function (accumulator, currentValue) {
        //concate to array.
        return arr.concat(accumulator, currentValue);
    });
    return arr;
};
