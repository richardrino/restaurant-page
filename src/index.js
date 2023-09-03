import '/src/reset.css';
import '/src/styles.css';
import firstLoad from '/src/scripts/firstLoad';
import clearPage from './scripts/clearPage';
import loadHome from '/src/scripts/home';
import loadMenu from '/src/scripts/menu';

firstLoad();

document.querySelector('#home').addEventListener('click', () => {
    clearPage();
    loadHome();
})
document.querySelector('#menu').addEventListener('click', () => {
    clearPage();
    loadMenu();
})

