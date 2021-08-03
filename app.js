window.onload = () => {
	let button = document.querySelector("#btn");

	// Function for calculating BMI
	button.addEventListener("click", calculateBMI);
};

function calculateBMI() {

	/* Getting input from user into height variable.
	Input is string so typecasting is necessary. */
	let height = parseInt(document
			.querySelector("#height").value);

	/* Getting input from user into weight variable.
	Input is string so typecasting is necessary.*/
	let weight = parseInt(document
			.querySelector("#weight").value);

	let result = document.querySelector("#result");

	// Checking the user providing a proper
	// value or not
	if (height === "" || isNaN(height))
		result.innerHTML = "Provide a valid Height!";

	else if (weight === "" || isNaN(weight))
		result.innerHTML = "Provide a valid Weight!";

	// If both input is valid, calculate the bmi
	else {

		// Fixing upto 2 decimal places
		let bmi = (weight / ((height * height)
							/ 10000)).toFixed(2);

		// Dividing as per the bmi conditions
		if (bmi < 18.5) result.innerHTML =
			`UnderWeight : <span>${bmi}</span>`;

        else if (bmi >= 18.5 && bmi <= 24.9)
			result.innerHTML =
				`Normal Range : <span>${bmi}</span>`;

		else if (bmi >= 25.0 && bmi <= 29.9)
			result.innerHTML =
				`OverWeight : <span>${bmi}</span>`;

        else {  
                result.innerHTML =
                    `Obese : <span>${bmi}</span>`;
                if (bmi >= 30.0 && bmi <= 34.9)
			result.innerHTML =
				`Obese Class I : <span>${bmi}</span>`;
                else if (bmi >= 35.0 && bmi <= 39.9)
			result.innerHTML =
				`Obese Class II : <span>${bmi}</span>`;
                else if (bmi >= 40)
			result.innerHTML =
				`Obese Class III : <span>${bmi}</span>`;    
            }     

        // else if (bmi >= 25.0 && bmi <= 29.9)
                    // result.innerHTML =
                        // `OverWeight : <span>${bmi}</span>`;

		// else result.innerHTML =
		// `Over Weight : <span>${bmi}</span>`;
	}
}

