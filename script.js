function compute()
{
    var principal = document.getElementById("principal").value;
    //if principal amount is <= 0, alert is shown and function returns
    if(principal<=0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    
    //calculate the year to print in output
    var year = new Date().getFullYear()+parseInt(years);

    //output the result with mark tags
    document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,<br>at an interest rate of <mark>"+rate+"%</mark><br>You will receive an amount of <mark>"+interest+"</mark>,<br>in the year <mark>"+year+"</mark><br>";
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    //update rate label with input value
    document.getElementById("rate_val").innerText=rateval;
}