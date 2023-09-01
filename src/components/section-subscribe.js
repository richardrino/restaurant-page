function subscribeSectionContent() {
	const subscribeSection = document.createElement('section');
	subscribeSection.classList.add('section-subscribe');
	const heading = document.createElement('h2');
	heading.innerText = 'Subscribe';
	subscribeSection.appendChild(heading);
	const text = document.createElement('p');
	text.innerText = 'Sign up to hear about news, special menus, and events!';
	subscribeSection.appendChild(text);
	const signUpForm = document.createElement('form');
	signUpForm.classList.add('signup-form');
	const emailInput = document.createElement('input');
	emailInput.id = 'signUpEmail';
	emailInput.placeholder = 'Email';
	const submitButton = document.createElement('button');
	submitButton.type = 'submit';
	submitButton.innerText = 'Sign Up';
	signUpForm.appendChild(emailInput);
	signUpForm.appendChild(submitButton);
	subscribeSection.appendChild(signUpForm);

	return subscribeSection;
}

export default subscribeSectionContent;
