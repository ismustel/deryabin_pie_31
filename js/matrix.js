function create_matrix(rows_id, cols_id) {
    let rows = parseInt(document.getElementById(rows_id).value)
    let cols = parseInt(document.getElementById(cols_id).value)
    
    let matrix = new Array(rows)

    for (let i = 0; i < rows; i++) {
        matrix[i] = new Array(cols).fill(0)
        for (let j = 0; j < cols; j++) {
            matrix[i][j] = Math.floor(Math.random() * 51);
        }
    }
    return matrix;
}

function output_string_elements(matrix, k_id, res_id) {
    let k = parseInt(document.getElementById(k_id).value)

    let res = ""

    if (k >= 1 || k <= matrix.length) {
        k -= 1
        for (let n = 0; n < matrix[k].length; n++) {
            res += matrix[k][n] + " "
        }
        document.getElementById(res_id).innerHTML = res
        
    } else {
        document.getElementById(res_id).innerHTML = "Введен неверный номер строки"
    }
}

