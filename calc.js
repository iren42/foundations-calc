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

function	operateLevelTwo(str)
{
	let b = 0;
	let	a = 1; // initial value for multiplications
	let	j = -1;
	const	arrTimes = str.split("*");

	while (++j < arrTimes.length)
	{
		b = Number(arrTimes[j]);
		a = operate(multiply, a, b);
	}
	return (a);
}

// level 1 operations are + and -
function	operateLevelOne(arr)
{
	let b = 0;
	let	a = 0; // inital value for additions and substractions
	let i = -1;

	while (++i < arr.length)
	{
		b = Number(arr[i]);
		a = operate(add, a, b);
	}
	return (a);
}

function	createPlusMinusArray(str)
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

function	parseDisplay(str)
{
	let total = 0;
	let	i = 0;
	const	arrOrderedPlusMinus = createPlusMinusArray(str);
	const	arrSplitOnPlusMinus = str.split("+").join("-").split("-");

	console.log(arrSplitOnPlusMinus);
	i = -1;
	while (++i < arrSplitOnPlusMinus.length)
	{
		if (hasLevelTwoOp(arrSplitOnPlusMinus[i]))
		{
			total = operateLevelTwo(arrSplitOnPlusMinus[i]);
			console.log(total.toString());
			arrSplitOnPlusMinus.splice(i, 1, total.toString());
		}
	}
	console.log(arrSplitOnPlusMinus);
	total = operateLevelOne(arrSplitOnPlusMinus);
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
