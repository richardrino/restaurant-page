import clearPage from '/src/scripts/clearPage';

function headerContent() {
	const header = document.createElement('header');
	const nav = document.createElement('nav');
	nav.classList.add('navbar');
	header.appendChild(nav);
	const navList = document.createElement('ul');
	navList.classList.add('nav-list');
	const links = ['Home', 'Menu', 'Contact'];

	links.forEach((link) => {
		const listItem = document.createElement('li');
		listItem.innerText = link;
		navList.appendChild(listItem);

		if (link === 'Home') {
			listItem.id = 'home';
		}
		if (link === 'Menu') {
			listItem.id = 'menu';
		}
		if (link === 'Contact') {
			listItem.id = 'contact';
		}
	});

	nav.appendChild(navList);

	return header;
}

export default headerContent;
