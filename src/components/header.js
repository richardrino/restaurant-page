function headerContent() {
	const header = document.createElement('header');
	const nav = document.createElement('nav');
	nav.classList.add('navbar');
	header.appendChild(nav);
	const navList = document.createElement('ul');
	navList.classList.add('nav-list');
	const links = ['Luxe', 'Book Now', 'Contact'];

	links.forEach((link) => {
		const listItem = document.createElement('li');
		listItem.innerText = link;
		navList.appendChild(listItem);
	});

	nav.appendChild(navList);

	return header;
}

export default headerContent;
