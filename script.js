document.addEventListener('DOMContentLoaded', function() {
const form = document.getElementById('registration-form');
const feedbackDiv = document.getElementById('form-feedback');

	form.addEventListener('submit', function(event) {
		event.preventDefault();
	

		const username = document.getElementById('username').value.trim();  // ✅ Fixed: get elements properly
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        
		let isValid = true;
		let message = [];

		if (username.length < 3)
		{
			isValid = false;
			message.push('The username has to be more than 3 characters');
		}
		if (!email.includes('@') || !email.includes('.'))
		{
			isValid = false;
			message.push('Please enter the right email');
		}
		if (password.length < 8)
		{
			isValid = false;
			message.push('You need a strong password')
		}
		feedbackDiv.style.display = "block";
		if (isValid)
		{
			feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
		}
		else{
			feedbackDiv.innerHTML = message.join('<br>');
            feedbackDiv.style.color = "#dc3545";
		}
	});
});

