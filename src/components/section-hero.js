function sectionHero() {
	const heroSection = document.createElement('section');
	heroSection.classList.add('section-hero');
	const textContainer = document.createElement('div');
	textContainer.classList.add('hero-text-container');
	heroSection.appendChild(textContainer);

	const heading = document.createElement('h1');
	heading.innerText = 'Welcome';
	heading.classList.add('hero-heading', 'clr-white');
	const text1 = document.createElement('p');
	text1.innerText =
		'Welcome to an extraordinary culinary experience at Luxe Cuisine. Step into a world where exceptional flavors and impeccable service intertwine to create unforgettable moments.';
	text1.classList.add('hero-text');
	const text2 = document.createElement('p');
	text2.innerText = 'Luxe Cuisine is open for dine in or take out.';
	text2.classList.add('hero-text');
	const text3 = document.createElement('p');
	text3.innerText = 'Tuesday - Sunday';
	text3.classList.add('hero-text');

    textContainer.appendChild(heading);
	textContainer.appendChild(text1);
	textContainer.appendChild(text2);
	textContainer.appendChild(text3);

	const heroImg = document.createElement('div');
	heroImg.classList.add('hero-img');
	heroSection.appendChild(heroImg);

    return heroSection;
}

export default sectionHero;
