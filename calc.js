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

function	operateLevelOne(arr)
{
	let b = 0;
	let	a = 0;
	let i = -1;

	while (++i < arr.length)
	{
		b = Number(arr[i]);
		a = operate(add, a, b);
	}
	return (a);
}

function	parseDisplay(str)
{
	let total = 0;
	let	i = 0;
	let	j = -1;

	const	arrPlus = str.split("+");
	console.log(arrPlus);
	i = -1;
	while (++i < arrPlus.length)
	{
		if (hasLevelTwoOp(arrPlus[i]))
		{
			total = operateLevelTwo(arrPlus[i]);
			console.log(total.toString());
			arrPlus.splice(i, 1, total.toString());
		}
	}
	console.log(arrPlus);
	total = operateLevelOne(arrPlus);
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
