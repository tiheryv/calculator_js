class Display{
    constructor (display_last_value, display_current_value){
        
        this.display_current_value = display_current_value;
        this.display_last_value = display_last_value;
        this.calculator = new Calculator();
        this.last_value = '';
        this.current_value = '';
        this.operation_type = undefined;
        this.operators = {
            addition: '+', 
            substraction:'-', 
            multiplication:'x', 
            division:'%',
        }
    }
    clear(){
        this.current_value = '',
        this.last_value = '';
        this.operation_type = undefined;
        this.print_value();
    }

    delete(){
        this.current_value = this.current_value.toString().slice(0,-1);
        this.print_value();
    }

    compute(type){
        this.operation_type !== 'equal' && this.calculate();
        this.operation_type = type;
        this.last_value = this.current_value || this.last_value;
        this.current_value = '';
        this.print_value();
    }

    add_number(number){
        //If the display already has a '.' we return anything 
        if(number === '.' && this.current_value.includes('.')) return
        this.current_value = this.current_value.toString() + number.toString();
        this.print_value();
    }

    print_value(){
        this.display_current_value.textContent = this.current_value;
        this.display_last_value.textContent = `${this.last_value} ${this.operators[this.operation_type] || ''}`;

    }

    calculate(){
        const last_value = parseFloat(this.last_value);
        const current_value = parseFloat(this.current_value);
    //is our variable NaN
        if(isNaN(current_value) || isNaN(last_value)) return

        this.current_value = this.calculator[this.operation_type](last_value,current_value);
    }

    
}