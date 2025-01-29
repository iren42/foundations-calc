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

function	parseDisplay(str)
{
	let	a = 0;
	let	b = 0;
	let total = 0;
	let	i = 0;
	let	j = -1;

	const	arrPlus = str.split("+");
	console.log(arrPlus);
	i = 0;
	while (i < arrPlus.length)
	{
		if (hasLevelTwoOp(arrPlus[i]))
		{
			const	arrTimes = arrPlus[i].split("*");
			j = -1;
			a = 1;
			while (++j < arrTimes.length)
			{
				b = Number(arrTimes[j]);
				a = operate(multiply, a, b);
			}
		}
		i++;
	}
	// else
	// 	a = 0;
	// i = 0;
	// while (i < arrPlus.length)
	// {
	// 	b = arrPlus[i].split("");
	// 	console.log(b);
	// 	// remember previous value
	// 	a = operate("+", Number(a), Number(b));
	// 	i++;
	// }
	console.log("Result: " + a);

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
