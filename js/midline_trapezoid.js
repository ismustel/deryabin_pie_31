function calc_midline_trapezoid(a_id, b_id, res_id){
    let a = parseFloat(document.getElementById(a_id).value)
    let b = parseFloat(document.getElementById(b_id).value)

    let res = (a + b)/2
    
    document.getElementById(res_id).innerHTML = res
}