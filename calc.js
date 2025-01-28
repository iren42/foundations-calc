let	add = (a, b) => a + b;
let	substract = (a, b) => a - b;
let	multiply = (a, b) => a * b;
let	divide = (a, b) => a / b;

function	operate(op, a, b)
{
	let	res = 0;
	if (op === "+")
		res = add(a, b);
	else if (op === "-")
		res = substract(a, b);
	else if (op === "*")
		res = multiply(a, b);
	else if (op === "/")
		res = divide(a, b);
	else
		console.log("We did not recognize your operator");
	return (res);
}

const	digits = document.querySelector(".digits");
const	operators = document.querySelector(".operators");
const	display = document.querySelector(".display");

function	modifyDisplay(event)
{
	if (event.target.matches(".digit"))
	{
		display.textContent += event.target.textContent;
	}
	else if (event.target.matches(".operator"))
	{
		display.textContent += event.target.textContent;
	}
}

document.addEventListener("click", modifyDisplay);
//operators.addEventListener("click", modifyDisplay);
