function create_inputs(count_input, div_id, span_id){
    const help = document.createElement("span")
    help.classList = "input-text"
    help.textContent = "Введите одно число в каждое поле ввода"
    document.getElementById(span_id).append(help)
    for(let i = 0; i < count_input; i++){
        const input = document.createElement("input")
        input.classList = "block_input"
        input.name = "set"
        document.getElementById(div_id).append(input)
    }

}
function count_even_numbers(res_id){
    const all_inputs = document.querySelectorAll('input[name="set"]')
    let count_even_numbers = 0
    let set_even_numbers = ""
    for (input of all_inputs){
        let number = parseInt(input.value)
        if (number % 2 == 0){
            ++count_even_numbers 
            set_even_numbers += (number + " ")
        }
    }
    document.getElementById(res_id).innerHTML = "Набор из четных чисел:"+set_even_numbers + ";" + ' Количество четных чисел:' + count_even_numbers
}   