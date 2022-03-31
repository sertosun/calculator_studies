
function add(num1, num2) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    result = num1 + num2;
    console.log(result);
    return result;
 }

 function sub(num1, num2) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    result = num1 - num2;
    console.log(result);
    return result;
 }

 function mult(num1, num2) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    result = num1 * num2;
    console.log(result);
    return result;
 }

 function divs(num1, num2) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    result = num1 / num2;
    console.log(result);
    return result;
 }

function calculate() {
    number_one = document.getElementById("number_one").value;
    number_two = document.getElementById("number_two").value;
    number_one = parseInt(number_one);
    number_two = parseInt(number_two);
    result = document.getElementById("result");
    let process;
    process = document.getElementById("select").value;


    if (process == "add") {
        result = result.innerHTML = add(number_one, number_two);
    } else if (process == "sub") {
        result = result.innerHTML = sub(number_one, number_two);
    } else if (process == "mult") {
        result = result.innerHTML = mult(number_one, number_two);
    } else if (process == "divs") {
        result = result.innerHTML = divs(number_one, number_two);
    } 
}
    
