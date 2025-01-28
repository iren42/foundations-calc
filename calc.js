let	add = (a, b) => a + b;
let	substract = (a, b) => a - b;
let	multiply = (a, b) => a * b;
let	divide = (a, b) => a / b;

function	operate(op, a, b)
{
	if (op === "+")
		add(a, b);
	else if (op === "-")
		substract(a, b);
	else if (op === "*")
		multiply(a, b);
	else if (op === "/")
		divide(a, b);
	else
		console.log("We did not recognize your operator");

}
