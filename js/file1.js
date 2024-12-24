function average_sqrt (a_id, b_id,res_id) {
    let a = parseInt(document.getElementById(a_id).value); 
    let b = parseInt(document.getElementById(b_id).value);

    if (a < 0 || b < 0){
        document.getElementById(res_id).innerHTML = 'Решения нет, нельзя вводить отрицательные числа';
        return;
    }
    if (isNaN(a) || isNaN(b)){
        document.getElementById(res_id).innerHTML = 'Решения нет, нельзя вводить буквы';
        return;
    }

    let res = Math.sqrt(a*b);
    document.getElementById(res_id).innerHTML=res;
}