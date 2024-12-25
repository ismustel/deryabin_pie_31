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

function output_string_elements(matrix, k_id, res_id) {
    let k = parseInt(document.getElementById(k_id).value)

    let res_string = ""

    if (k >= 1 || k <= matrix.length) {
        k -= 1
        for (let n = 0; n < matrix[k].length; n++) {
            res_string += matrix[k][n] + " "
        }
        document.getElementById(res_id).innerHTML = res_string
        
    } else {
        document.getElementById(res_id).innerHTML = "Введен неверный номер строки"
    }
}

