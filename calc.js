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

const	ops = ["+", "-", "*", "/"];

// level2 op = * and /
function	hasLevelTwoOp(str)
{
	if (str.includes("*"))
	{
		console.log("win");
		return (true);
	}
	return (false);
}

function	parseDisplay(str)
{
	let	a = 0;
	let	b = 0;
	let res = 0;
	let	i = 0;

	const	splitAdd = str.split("+");

	if (hasLevelTwoOp(splitAdd))
	{
		const	splitMult = splitAdd.split("*");
		console.log(splitMult);
		// operate("*", a, b);

	}
	a = 0;
	while (i < splitAdd.length)
	{
		b = splitAdd[i].split("");
		console.log(b);
		// remember previous value
		a = operate("+", Number(a), Number(b));
		i++;
	}
	console.log(a);

}

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
	else if (event.target.matches(".equals"))
	{
		parseDisplay(display.textContent);
	}
	else if (event.target.matches(".clear"))
	{
		display.textContent = "";
	}
}

document.addEventListener("click", modifyDisplay);
//operators.addEventListener("click", modifyDisplay);
