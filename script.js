
function toggleText1() {
    let text = document.getElementById("para1");
    let hint = document.querySelector(".tap-hint");

    text.style.display = "block";
    hint.style.display = "none";
}

function toggleText2() {
    let text = document.getElementById("para2");
    let hint = document.querySelector(".tap-hint");

    text.style.display = "block";
    hint.style.display = "none";
}

function toggleText3() {
    let text = document.getElementById("para3");
    let hint = document.querySelector(".tap-hint");

    text.style.display = "block";
    hint.style.display = "none";
}

function validateForm() {
			//const used when variable will not change and can assign a value on declaration
            const fName = document.getElementById("fName").value;
			const lName = document.getElementById("lName").value;
			const genderSelected = document.querySelector('input[name="gender"]:checked');
            const confirmation1 = document.getElementById("confirmation1").checked;
            const confirmation2 = document.getElementById("confirmation2").checked;
            

            const firstNameError = document.getElementById("fNameError");
            const secondNameError = document.getElementById("lNameError");
            const genderErr = document.getElementById("genderError");
            const confirm1Err = document.getElementById("confirmation1Error");
            const confirm2Err = document.getElementById("confirmation2Error");
            
            firstNameError.textContent = "";
            secondNameError.textContent = "";
            genderErr.textContent = "";
            confirm1Err.textContent = "";
            confirm2Err.textContent = "";

            let isValid = true;
			//=== is strict equality, type must be the same. 77
            if (fName === "") {
                firstNameError.textContent = "Please enter your first name.";
                isValid = false;
            }
            if (lName === "") {
                secondNameError.textContent = "Please enter your Second name.";
                isValid = false;
            }
            if (!genderSelected) {
                genderErr.textContent = "Please enter your gender";
                isValid = false;
            }
            if (!confirmation1 && !confirmation2) {
                confirm1Err.textContent = "Please tick one of the options in checkbox";
                isValid = false;
            }
            
            if (isValid) {
                alert("Details submitted successfully :)");
                return true;
            } else {
                return false; 
            }
        }

        function resetErrors() {
            document.getElementById("fNameError").textContent = "";
            document.getElementById("lNameError").textContent = "";
            document.getElementById("genderError").textContent = "";
            document.getElementById("confirmation1Error").textContent = "";
        }
