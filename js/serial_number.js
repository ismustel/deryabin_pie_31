function find_two_serial_number(first_number_id, second_number_id, res_id){
    let first_number = parseFloat(document.getElementById(first_number_id).value)
    let second_number = parseFloat(document.getElementById(second_number_id).value)
    let result = 0

    if (first_number < second_number){
        result = 1
    }else{
        result = 2
    }
    document.getElementById(res_id).innerHTML = result
}