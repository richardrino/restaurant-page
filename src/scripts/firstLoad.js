import createHeader from '/src/components/header';
import createSectionHero from '/src/components/section-hero';
import createSectionSubscribe from '/src/components/section-subscribe';
import createFooter from '/src/components/footer';

const firstLoad = function () {
	const content = document.querySelector('#content');
	const header = createHeader();
	const sectionHero = createSectionHero();
	const sectionSubscribe = createSectionSubscribe();
	const footer = createFooter();

	content.appendChild(header);
	content.appendChild(sectionHero);
	content.appendChild(sectionSubscribe);
	content.appendChild(footer);
};

export default firstLoad;
