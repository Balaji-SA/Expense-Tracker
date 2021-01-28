let income = 0.00;
let expense = 0.00;
let balance = 0.00;

document.getElementById("submit").addEventListener("click",(e)=>{           //Adding transactions
    e.preventDefault();
    let entered_amount = document.getElementById("amount").value;
    let task = document.getElementById("task").value;
    let string_length = entered_amount.length;
    let type = entered_amount.charAt(0);
    let amount_string = entered_amount.slice(1,string_length);
    let amount_num = parseInt(amount_string);
    if(type == '+'){
        income = income + amount_num;                                       //updating income
        document.getElementById("income_text").innerHTML = "Rs "+income;
    }
        
    else if(type == '-')
    {
        expense = expense + amount_num;                                     //updating expense
        document.getElementById("expense_text").innerHTML = "Rs "+expense;
    }
    balance = income - expense; 
    document.getElementById("balance_text").innerHTML = "Rs "+balance;       //updating balance

    let list = document.createElement("div");
    list.className = "list";
    list.id = Math.random();
    list.innerHTML = task+"    "+type+amount_string;
    let delete_button = document.createElement("button");
    delete_button.innerText = 'X';
    if(type == '+')
        delete_button.className = "income_btn";
    else if(type == '-')
        delete_button.className = "expense_btn";
    delete_button.setAttribute("id",Math.random());
    delete_button.setAttribute("onClick","remove_transaction("+list.id+");");
    list.appendChild(delete_button);
    let history_lists = document.getElementById("history_lists");
    history_lists.appendChild(list);
})

function remove_transaction(id){                                            //removing transactions
    let transaction = document.getElementById(id);
    let transaction_str = transaction.innerHTML;
    let amount_string;
    let amount;
    if(transaction_str.indexOf('+') != -1)
    {
        amount_string = transaction_str.slice(transaction_str.indexOf('+')+1,transaction_str.length);
        amount =  parseInt(amount_string);
        income = income - amount;
    }
    else if(transaction_str.indexOf('-') != -1)
    {
        amount_string = transaction_str.slice(transaction_str.indexOf('-')+1,transaction_str.length); 
        amount =  parseInt(amount_string);
        expense = expense - amount;
    }
    balance = income - expense ;
    document.getElementById("income_text").innerHTML = "Rs "+income;    //updating income
    document.getElementById("expense_text").innerHTML = "Rs "+expense;  //updating expense
    document.getElementById("balance_text").innerHTML = "Rs "+balance;  //updating balance
    
    transaction.remove();
}

