const form = document.getElementById('form');
const memcode = document.getElementById('memcode');
const dob = document.getElementById('dob');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const address = document.getElementById('address');
const city = document.getElementById('city');
const mobile = document.getElementById('mobile');
const uname = document.getElementById('uname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const bsex = document.getElementById('bsex');



form.addEventListener('submit', e => {  // prevent default and will call the checkinput function
	e.preventDefault();

	checkInputs();
});

/*1.register button's function (display an error/success msg and color green/red)
 2.check each field's value if blank it will call the  error function and change border color to red else will call the success function
 3.trim to remove the whitespaces*/
function checkInputs() {
	
	const memcodeVal = memcode.value.trim();
	const fnameVal = fname.value.trim();
	const lnameVal = lname.value.trim();
	const addressVal = address.value.trim();
	const cityVal = city.value.trim();
	const mobileVal = mobile.value.trim();
	const unameVal = uname.value.trim();
	const emailVal = email.value.trim();
	const passwordVal = password.value.trim();
	const bsexVal = bsex.value.trim();
	const allInputsValid = memcodeVal && fnameVal && lnameVal && addressVal && cityVal && mobileVal && unameVal && emailVal && passwordVal && bsexVal;


	if (memcodeVal === '') {
		setErrorFor(memcode, 'Member Code is required');
	} else {
		setSuccessFor(memcode);
	}

	if (dob.value === '') {
		setErrorFor(dob, 'Date of Birth is required');
	} else {
		setSuccessFor(dob);
	}

	if (fnameVal === '') {
		setErrorFor(fname, 'First name  is required');
	} else {
		setSuccessFor(fname);
	}

	if (lnameVal === '') {
		setErrorFor(lname, 'Last name  is required');
	} else {
		setSuccessFor(lname);
	}

	if (addressVal === '') {
		setErrorFor(address, 'Address  is required');
	} else {
		setSuccessFor(address);
	}

	if (cityVal === '') {
		setErrorFor(city, 'City  is required');
	} else {
		setSuccessFor(city);
	}

	if (mobileVal === '') {
		setErrorFor(mobile, 'Mobile phone  is required');
	} else {
		setSuccessFor(mobile);
	}

	if (unameVal === '') {
		setErrorFor(uname, 'Username  is required');
	} else {
		setSuccessFor(uname);
	}

	if (emailVal === '') {
		setErrorFor(email, 'Email  is required');
	} else if (!isEmail(emailVal)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}

	if (passwordVal === '') {
		setErrorFor(password, 'Password  is required');
	} else {
		setSuccessFor(password);
	}

	if (bsexVal === '') {
		setErrorFor(bsex, 'Birth sex  is required');

	} else {
		setSuccessFor(bsex);
	}

	if (allInputsValid) {
		alert('You are registered');
	}
	else {
		alert('Please fill up all required field');
	}


}
// this is the error function
function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}
// this is the success function
function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

// this will validate the email value if it has the ff: characters
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


/*password strength verifier here */
let power = document.getElementById('power-point');
let strmsg = document.getElementById('strmsg');

password.oninput = function () {
	let point = 0;
	let value = password.value;
	let widthPower = ['1%', '25%', '50%', '75%', '100%'];
	let passwordmsg = ['Weak', 'Good', 'Moderate', 'Strong', 'Very Strong'];
	let colorPower = ['#D13F40', '#DC6551', '#F2B84F', '#BDE952', '#00FF00'];

/*it will start checking inputvalue @6 chars and each time an arrayTest value is found the point var increment */
	if (value.length >= 6) {
		let arrayTest = [
			/[0-9]/,
			/[a-z]/,
			/[A-Z]/,
			/[^0-9a-zA-Z]/
		];
		arrayTest.forEach(item => {
			if (item.test(value)) {
				point += 1;
			}
		});
	}
	power.style.width = widthPower[point];
	power.style.backgroundColor = colorPower[point];
	strmsg.innerText = 'Password strength : ' + passwordmsg[point];
	if (value.trim().length > 0) {
		strmsg.style.fontSize = '11px';
		strmsg.innerText = 'Password strength : ' + passwordmsg[point];
	} else {
		strmsg.innerText = '';
	}
}

//show password
function showPassword() {
	var passwordInput = document.getElementById("password");
	if (passwordInput.type === "password") {
		passwordInput.type = "text";
	} else {
		passwordInput.type = "password";
	}
}

//upon load all input fields are disabled except the member code field remove the multiline comment tag to enable this function

/*
window.onload = function () {
	var fieldsToDisable =
		['company','dob', 'fname', 'mname', 'lname', 'address','address2', 'brgy',
			'city', 'country', 'province', 'zip', 'mobile', 'uname',
			'email', 'password', 'bsex', 'status'
		];

	for (var i = 0; i < fieldsToDisable.length; i++) {

		var field = document.getElementById(fieldsToDisable[i]);
		if (field) {
			field.disabled = true;

		}
	}
}
*/

// this function clears all the input field and change its bg color to dirty white and disable fields
// formfields const contains all the fields to be disabled
function cancelmember() {

	const formFields = [
		'company','dob', 'fname', 'mname', 'lname', 'address','address2', 'brgy',
		'city', 'country', 'province', 'zip', 'mobile',
		'uname', 'email', 'password', 'bsex', 'status'
	];

	// Loop through each field and set its value to blank and disable it
	formFields.forEach(fieldId => {
		const field = document.getElementById(fieldId);
		field.value = '';
		field.style.backgroundColor = '#e8e4c9';
		field.disabled = true;
	});
}

/* act 3 validate function */
// if input value in membercode field matches the value in memberlist array it will prefill values to fields and disable
// it else if no input value on member code field matches none it will display an alert msg that no record is found
function validateMember() {

    var memberCode = document.getElementById("memcode").value;
	var birth = document.getElementById("dob").value;
    var memberList = [
        {codeInput: "001", bdays: "01-01-2021", firstName: "John",  mname: "Doe", lastname: "Gomez", Address: "Block 1 Phase 1 ", City: "Iloilo", Mobile: "0912345678",},
        {codeInput: "002", bdays: "02-02-2022", firstName: "Totoy", mname: "Brown", lastname: "Burgos", Address: "Sampalok 169", City: "Quezon", Mobile: "0912345678",},
        {codeInput: "007", bdays: "03-03-2023", firstName: "Games", mname: "Bond", lastname: "Gomez", Address: "Tondo Street 123", City: "Manila", Mobile: "0900000070",}
    ];

    for (var i = 0; i < memberList.length; i++) {
        if (memberList[i].codeInput === memberCode) {

            if (memberList[i].firstName) {
                document.getElementById("fname").disabled = true;
            }

            if (memberList[i].mname) {
                document.getElementById("mname").disabled = true;
            }
            if (memberList[i].lastname) {
                document.getElementById("lname").disabled = true;
            }
            if (memberList[i].Address) {
                document.getElementById("address").disabled = true;
            }
            if (memberList[i].City) {
                document.getElementById("city").disabled = true;
            }
            if (memberList[i].Mobile) {
                document.getElementById("mobile").disabled = true;
            }

            document.getElementById("fname").value = memberList[i].firstName;
            document.getElementById("dob").value = memberList[i].bdays;
            document.getElementById("mname").value = memberList[i].mname;
            document.getElementById("lname").value = memberList[i].lastname;
            document.getElementById("address").value = memberList[i].Address;
            document.getElementById("city").value = memberList[i].City;
            document.getElementById("mobile").value = memberList[i].Mobile;
            return;
        }
    }

    alert("No record found");
}

