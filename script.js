let clear = document.querySelector("#clear");
let equal = document.querySelector("#equal");
let add = document.querySelector("#add");
let subtract = document.querySelector("#subtract");
let divide = document.querySelector("#divide");
let multiply = document.querySelector("#multiply");
let zero = document.querySelector("#zero");
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");

currentNum = 0;
operation = null;
num1 = 0;

zero.addEventListener("click", function()
{
    let output = document.querySelector("#output");
    let result = 0;

    currentNum = (currentNum * 10) + result;
    output.innerText = currentNum;
});
one.addEventListener("click", function()
{
    let output = document.querySelector("#output");
    let result = 1;
 
    currentNum = (currentNum * 10) + result;
    output.innerText = currentNum;
});
two.addEventListener("click", function()
{
    let output = document.querySelector("#output");
    let result = 2;
   
    currentNum = (currentNum * 10) + result;
    output.innerText = currentNum;
});
three.addEventListener("click", function()
{
    let output = document.querySelector("#output");
    let result = 3;

    currentNum = (currentNum * 10) + result;
    output.innerText = currentNum;
});
four.addEventListener("click", function()
{
    let output = document.querySelector("#output");
    let result = 4;

    currentNum = (currentNum * 10) + result;
    output.innerText = currentNum;
});
five.addEventListener("click", function()
{
    let output = document.querySelector("#output");
    let result = 5;

    currentNum = (currentNum * 10) + result;
    output.innerText = currentNum;
});
six.addEventListener("click", function()
{
    let output = document.querySelector("#output");
    let result = 6;

    currentNum = (currentNum * 10) + result;
    output.innerText = currentNum;
});
seven.addEventListener("click", function()
{
    let output = document.querySelector("#output");
    let result = 7;

    currentNum = (currentNum * 10) + result;
    output.innerText = currentNum;
});
eight.addEventListener("click", function()
{
    let output = document.querySelector("#output");
    let result = 8;

    currentNum = (currentNum * 10) + result;
    output.innerText = currentNum;
});
nine.addEventListener("click", function()
{
    let output = document.querySelector("#output");
    let result = 9;

    currentNum = (currentNum * 10) + result;
    output.innerText = currentNum;
});


add.addEventListener("click", function()
{    
    if (operation != null)
    {
        equals()
    }
    operation = "+";
    num1 = currentNum;
    currentNum = 0;
});

subtract.addEventListener("click", function()
{
    if (operation != null)
    {
        equals()
    }
    operation = "-";
    num1 = currentNum;
    currentNum = 0;
});

divide.addEventListener("click", function()
{
    if (operation != null)
    {
        equals()
    }
    operation = "/";
    num1 = currentNum;
    currentNum = 0;
});

multiply.addEventListener("click", function()
{
    if (operation != null)
    {
        equals()
    }
    operation = "*";
    num1 = currentNum;
    currentNum = 0;
});

equal.addEventListener("click", function()
{
    equals()
});


function equals()
{
    if (operation == "+")
    {
        currentNum += num1;
        output.innerText = currentNum;
    }
    else if (operation == "-")
    {
        currentNum = num1 - currentNum;
        output.innerText = currentNum;
    }
    else if (operation == "/")
    {
        if (currentNum == 0)
        {
            output.innerText = "DNE"
            return;
        }
        currentNum = num1 / currentNum;
        output.innerText = currentNum;
    }
    else if (operation == "*")
    {
        currentNum *= num1;
        output.innerText = currentNum;
    }
    operation = null;
}


clear.addEventListener("click", function()
{
    let output = document.querySelector("#output");
    currentNum = 0;
    output.innerText = currentNum;
    operation = null;
});
