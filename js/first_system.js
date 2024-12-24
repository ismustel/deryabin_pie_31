function solution_first_system(number_a_id, number_b_id, number_x_id, res_id) {
    const a = parseFloat(document.getElementById(number_a_id).value);
    const b = parseFloat(document.getElementById(number_b_id).value);
    const x = parseFloat(document.getElementById(number_x_id).value);

    if (x <= 1) {
        result = a * Math.cos(x) ** 2 - b * Math.sin(x ** 2);
    }
    if (x > 1 &&  x <= 4) {
        result = b * Math.log(x) + x ** 3;
    }
    if (x > 4) {
        result = Math.sqrt(x ** 2 + a * b);
    }
    document.getElementById(res_id).innerHTML = result;
}   
