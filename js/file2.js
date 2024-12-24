function calc_hundrend(number_id, res_id){
    let three_digit_number = parseInt(document.getElementById(number_id).value)
    if (isNaN(three_digit_number)){
        document.getElementById(res_id).innerHTML = 'Решения нет, нельзя вводить буквы';
        return;
    }
    let res = Math.floor(three_digit_number/100)
    document.getElementById(res_id).innerHTML = res
}