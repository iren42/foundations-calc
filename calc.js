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


// level 2 operations are * and /
function	calcLevelTwo(str, arrOp)
{
	let b = 0;
	let	a = 0;
	let	buffer = 0;
	const	arrOperands = str.split("*").join("/").split("/");

	// in case the first number is negative
	if (arrOp.length + 1 != arrOperands.length)
		return (ERROR_MSG);
	// in case the last char is an operator
	if (arrOperands.length > 0)
	{
		console.log(arrOperands[arrOperands.length - 1] === "")
		if (arrOperands[arrOperands.length - 1] === "")
			return (ERROR_MSG);
	}
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
function	calcLevelOne(arrOperands, arrOp)
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

function	createPMArray(str = "")
{
	let	res = [];
	let	i = -1;

	// in case the first operand is negative
	if (str.length != 0)
	{
		if (str[0] === "-")
			i++;
	}
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

function	calculate(arrOperands, arrOperatorsLv1)
{
	let total = 0;
	let	i = -1;

	while (++i < arrOperands.length)
	{
		let	arrOperatorsLv2 = createMDArray(arrOperands[i]);
		if (arrOperatorsLv2.length != 0)
		{
			total = calcLevelTwo(arrOperands[i], arrOperatorsLv2);
			if (total === ERROR_MSG)
				return (ERROR_MSG);
			arrOperands.splice(i, 1, total.toString());
		}
	}
	total = calcLevelOne(arrOperands, arrOperatorsLv1);
	return (total);
}

function	parseAndCalc(str)
{
	const	arrOperatorsLv1 = createPMArray(str);
	const	arrOperands = str.split("+").join("-").split("-");

	// in case the first operand is negative
	if (arrOperands.length > 1)
	{
		if (arrOperands[0] === "")
		{
			arrOperands.shift();
			arrOperands[0] = "-".concat(arrOperands[0]);
		}
	}
	// in case the last char is an operator
	if (arrOperands.length > 0)
	{
		if (arrOperands[arrOperands.length - 1] === "")
			return (ERROR_MSG);
	}
	console.table(arrOperands);
	console.table(arrOperatorsLv1);

	if (arrOperatorsLv1.length + 1 != arrOperands.length)
		return (ERROR_MSG);

	return (calculate(arrOperands, arrOperatorsLv1));
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
		display.textContent = parseAndCalc(display.textContent);
	}
	else if (event.target.matches(".clear"))
	{
		display.textContent = "";
	}
}

const	ERROR_MSG = "ERROR!";
const	display = document.querySelector(".display");

document.addEventListener("click", modifyDisplay);
