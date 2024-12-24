function solution_second_system(number_a_id, number_b_id, number_x_id, res_id) {
    const a = parseFloat(document.getElementById(number_a_id).value);
    const b = parseFloat(document.getElementById(number_b_id).value);
    const x = parseFloat(document.getElementById(number_x_id).value);
    let result;
    if ((x != 1) && (x != 4) && (x != 5)) {
        document.getElementById(res_id).innerHTML = "Введен неверный x"
    } else{
        switch (x) {
            case 1:
                result = a * Math.cos(x) ** 2 - b * Math.sin(x ** 2);
                break;
            case 4:
                result = b * Math.log(x) + x ** 3;
                break;
            case 5:
                result = Math.sqrt(x ** 2 + a * b);
                break;
        }
        document.getElementById(res_id).innerHTML = result
    }
}