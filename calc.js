let	add = (a, b) => a + b;
let	substract = (a, b) => a - b;
let	multiply = (a, b) => a * b;
let	divide = (a, b) => a / b;

function	operate(opCallback, a, b)
{
	if (typeof a !== "number" || typeof b !== "number")
	{
		a = Number(a);
		b = Number(b);
	}
	return (opCallback(a, b));
}

const	digits = document.querySelector(".digits");
const	operators = document.querySelector(".operators");
const	display = document.querySelector(".display");

const	ops = ["+", "-", "*", "/"];

// level 2 operations are * and /
function	hasLevelTwoOp(str)
{
	// let	str = arr.join("");
	if (str.includes("*"))
	{
		return (true);
	}
	return (false);
}

function	operateLevelTwo(str, arrOp)
{
	let b = 0;
	let	a = 0;
	let	buffer = 0;
	const	arrOperands = str.split("*").join("/").split("/");

	while (arrOperands.length > 1 && arrOp.length != 0)
	{
		a = Number(arrOperands[0]);
		b = Number(arrOperands[1]);
		if (arrOp[0] === "*")
			buffer = operate(multiply, a, b);
		else
			buffer = operate(divide, a, b);
		arrOp.shift();
		arrOperands.shift();
		arrOperands.shift();
		arrOperands.unshift(buffer);
	}
	return (arrOperands[0]);
}

// level 1 operations are + and -
function	operateLevelOne(arrOperands, arrOp)
{
	let b = 0;
	let	a = 0;
	let	buffer = 0;

	while (arrOperands.length > 1 && arrOp.length != 0)
	{
		a = Number(arrOperands[0]);
		b = Number(arrOperands[1]);
		if (arrOp[0] === "+")
			buffer = operate(add, a, b);
		else
			buffer = operate(substract, a, b);
		arrOp.shift();
		arrOperands.shift();
		arrOperands.shift();
		arrOperands.unshift(buffer);
	}
	return (arrOperands[0]);
}

function	createPMArray(str)
{
	let	res = [];
	let	i = -1;

	while (++i < str.length)
	{
		if (str[i] === "+" || str[i] === "-")
			res.push(str[i]);
	}
	return (res);
}

function	createMDArray(str)
{
	let	res = [];
	let	i = -1;

	while (++i < str.length)
	{
		if (str[i] === "*" || str[i] === "/")
			res.push(str[i]);
	}
	return (res);
}

function	parseDisplay(str)
{
	let total = 0;
	let	i = 0;
	const	arrOrderedPlusMinus = createPMArray(str);
	const	arrGroupedMulDiv = str.split("+").join("-").split("-");

	console.log(arrGroupedMulDiv);
	i = -1;
	while (++i < arrGroupedMulDiv.length)
	{
		let	arrOrderedMulDiv = createMDArray(arrGroupedMulDiv[i]);
		if (arrOrderedMulDiv.length != 0)
		{
			total = operateLevelTwo(arrGroupedMulDiv[i], arrOrderedMulDiv);
			console.log(total.toString());
			arrGroupedMulDiv.splice(i, 1, total.toString());
		}
	}
	console.log(arrGroupedMulDiv);
	total = operateLevelOne(arrGroupedMulDiv, arrOrderedPlusMinus);
	console.log("Result: " + total);

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
