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

function output_even_rows(matrix, res_id){
    for (let i = 1; (i+1) < matrix.length; i += 2){
        document.getElementById(res_id).innerText += matrix[i].join(" ") + "\n"
    }
}