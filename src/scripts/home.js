import createSectionHero from '/src/components/section-hero';
import createSectionSubscribe from '/src/components/section-subscribe';
import createFooter from '/src/components/footer';

const loadHome = function () {
	const content = document.querySelector('#content');
	const sectionHero = createSectionHero();
	const sectionSubscribe = createSectionSubscribe();
	const footer = createFooter();

	content.appendChild(sectionHero);
	content.appendChild(sectionSubscribe);
	content.appendChild(footer);
};

export default loadHome;
