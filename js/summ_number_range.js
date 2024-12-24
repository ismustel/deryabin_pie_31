function summ_number_range(first_number_id, second_number_id, res_id){
    let a = parseInt(document.getElementById(first_number_id).value)
    let b = parseInt(document.getElementById(second_number_id).value)
   
    let summ = 0

    for (a; b >= a; a++){
        summ += a
    }

    document.getElementById(res_id).innerHTML = summ
}