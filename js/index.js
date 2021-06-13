const display_last_value = document.getElementById('last-value')
const display_current_value = document.getElementById('current-value')

//We save all number buttons
const button_numbers = document.querySelectorAll('.number')
const button_operator = document.querySelectorAll('.operator')

const display = new Display(display_last_value,display_current_value);

button_numbers.forEach (button =>{
    button.addEventListener('click', () => display.add_number(button.innerHTML));
});
//'value' is the operator type
button_operator.forEach(button => {
    button.addEventListener('click',() => display.compute(button.value))
})