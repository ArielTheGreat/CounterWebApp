let counter = 0;
let counterElement = document.getElementById("numberCounter");

function add()
{
    counterElement.innerHTML = ++counter;
}
function substract()
{
    counterElement.innerHTML = --counter;
}