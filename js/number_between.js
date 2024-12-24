function check_number_between (first_number_id, second_number_id, third_number_id, res_id) {
    let a = parseFloat(document.getElementById(first_number_id).value);
    let b = parseFloat(document.getElementById(second_number_id).value);
    let c = parseFloat(document.getElementById(third_number_id).value);
    if ((b > a) && (b < c)){
        res = true
    }else{
        res = false
    }
    document.getElementById(res_id).innerHTML = res
}   