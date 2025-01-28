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

function	isDigitBtn(str)
{
	return (str >= "0" && str <= "9");
}
function	modifyDisplay(event)
{
	// event.stopImmediatePropagation();
	// event.stopPropagation(); // DOES NOTHING, WHY?
	if (isDigitBtn(event.target.textContent))
		display.textContent += event.target.textContent;
}

digits.addEventListener("click", modifyDisplay);
operators.addEventListener("click", modifyDisplay);
