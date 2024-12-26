function create_matrix(rows_id, cols_id) {
    let rows = parseInt(document.getElementById(rows_id).value)
    let cols = parseInt(document.getElementById(cols_id).value)

    let matrix = []

    for (let i = 0; i < rows; i++) {
        let arr = []
        for (let j = 0; j < cols; j++) {
            let random_number = Math.floor(Math.random() * 51);
            arr.push(random_number)
        }
        matrix.push(arr)
    }
    console.log(matrix)
    return matrix;
}

function replace_even_part_matrix(matrix, matrix_id, res_id) {
    document.getElementById(matrix_id).innerText = ""
    document.getElementById(res_id).innerText = ""

    let arr_first_quarter = []
    let arr_fourty_quarter = []

    for(let i = 0; i < matrix.length; i++){
        let row_string = ""
        for(let j = 0; j < matrix[i].length; j++){
            row_string += matrix[i][j] + " "
        }
        document.getElementById(matrix_id).innerText += row_string + "\n"
    }

    for (let i = 0; matrix.length / 2 > i; i++) {
        arr_first_quarter[i] = []
        for (let j = 0; j < matrix[0].length / 2; j++) {
            arr_first_quarter[i][j] = matrix[i][j]

        }
    }

    for (let i = matrix.length / 2; i < matrix.length; i++) {
        arr_fourty_quarter[i - (matrix.length / 2)] = []
        for (let j = matrix[0].length / 2; j < matrix[0].length; j++) {
            arr_fourty_quarter[i - (matrix.length / 2)][j - (matrix[0].length / 2)] = matrix[i][j]
        }
    }

    for (let i = 0; i < (matrix.length/2); i++) {
        for (let j = 0; j < (matrix[0].length/2); j++) {
            matrix[i + (matrix.length/2)][j + (matrix[0].length/2)] = arr_first_quarter[i][j]; 
            matrix[i][j] = arr_fourty_quarter[i][j]; 
        }
    }

    for(let i = 0; i < matrix.length; i++){
        let row_string = ""
        for(let j = 0; j < matrix[i].length; j++){
            row_string += matrix[i][j] + " "
        }
        document.getElementById(res_id).innerText += row_string + "\n"
    }
}
