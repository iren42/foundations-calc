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

// console.log(operate("+", 1, 3));
// console.log(operate("-", 1, 3));
// console.log(operate("*", 1, 3));
// console.log(operate("/", 1, 3));
// console.log(operate("/", 1, 0));
const	digits = document.querySelectorAll(".digit");
const	operators = document.querySelectorAll(".operator");
const	display = document.querySelector(".display");

function	modifyDisplay(event)
{
	display.textContent += event.target.textContent;
}

digits.forEach(item => {
	addEventListener("click", modifyDisplay);

});
