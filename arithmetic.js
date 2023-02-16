function adding(num1,num2)
{
    alert("sum is "+String(num1+num2));
}

function sub(num1,num2)
{
    alert("difference is "+String(num1-num2));
}

function product(num1,num2)
{
    alert("product is "+String(num1*num2));
}

function division(num1,num2)
{
    alert("division is "+String(num1/num2));
}

function arithmeticfunction(){
    let num1 = Number(prompt('enter the first number',""));
    let num2 = Number(prompt('enter the second number',""));
    let add = confirm("Do want to perform addition if not select cancel to see next operation");
    if (add)
    {
        adding(num1,num2)
        }
    else{
       let diff = confirm("Do you want to subtract if not select cancel to see next operation");
       if (diff)
       {
         sub(num1,num2)
       }
       else{
        let mult = confirm("Do you want to multiply if not select cancel to see next operation");
        if (mult)
        {
          product(num1,num2)
        }
        else{
        let pro = confirm("Do you want to divide if not select cancel to end the operation");
        if (pro)
        {
            division(num1,num2)
        }
        else
        {
            alert("bye")
        }
        }
       }
    }
    }
