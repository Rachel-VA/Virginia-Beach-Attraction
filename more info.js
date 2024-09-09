

/* Creating functions with with arrays*/
/*declare 2 variables for full name and email */
var fname = document.forms['form']['fname'];
var email = document.forms['form']['email'];

/*declare 2 variables to display the conditions haven't met */
var fname_error = document.getElementById('fname_error');
var pass_error = document.getElementById('pass_error');

/*using built in functions-without overwriting the first assigned event */
fname.addEventListener('textInput', fname_Verify);
email.addEventListener('textInput', pass_Verify);

/*creating 2 functions for unsatisfied log in */
function validated(){
	if ((fname.value.length < 5) || (fname.value.length > 20) ) {
		fname.style.border = "1.5px solid blue";
		fname_error.style.display = "block";
		fname.focus();
		return false;

	}
	/* if email less than 4 characters or longer than 30, then show block message in a new box*/ 
	if ((email.value.length < 4) || (email.value.length > 30) ) {
		email.style.border = "1.5px solid blue";
		pass_error.style.display = "block";
		email.focus();
		return false;


	}
	/* if the condtions above satisfies, then alert before exit to the next page*/
	alert("Welcome " + fname.value + "!" + "thank you for providing your info");
	location.replace("Story.html");

/**** 
 * write 2 varified function for fname and email
 * after the alert when conditions satisfied, then accept
  */
}
function fname_Verify(){
	if (fname.value.length <= 20) {
		fname.style.border = "1.5px solid pink";
		fname_error.style.display = "none";
		return true;
	}
}
function pass_Verify(){
	if (email.value.length = 3) {
		email.style.border = "1.5px solid pink";
		pass_error.style.display = "none";

		return true;
	}
}

