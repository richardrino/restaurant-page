function loadMenu() {
	const content = document.querySelector('#content');

	const menuContent = document.createElement('section');
	menuContent.classList.add('section-menu');
	const img = document.createElement('div');
	img.classList.add('menu-img');
	const heading = document.createElement('h1');
	heading.innerText = 'Luxe Menu';
	heading.classList.add('menu-heading');

	menuContent.appendChild(img);
	menuContent.appendChild(heading);

	// Create & append salad & vegatable items

	const subMenu1 = document.createElement('div');
	const subHeading1 = document.createElement('h2');
	subHeading1.classList.add('submenu-heading');
	subHeading1.innerText = 'Salad & Vegatables';
	subMenu1.appendChild(subHeading1);

	const saladVegatablesMenu = [
		`Lettuces, pistachio, edamame, jicama, cucumber, crema, avocado, lime vinny     18`,
		`Mixed greens, roasted pistachio, edamame, jicama, cucumber, yogurt crema, avocado, zesty lime vinaigrette     19`,
		`Fresh spinach, candied pistachio, edamame, jicama, cucumber, creamy avocado, tangy lime vinaigrette     21`,
		`Romaine lettuce, spicy pistachio, edamame, jicama, cucumber, chipotle crema, avocado, citrus-infused lime vinny     20`,
	];

	saladVegatablesMenu.forEach((item) => {
		const menu = document.createElement('p');
		menu.innerText = item;
		subMenu1.appendChild(menu);
	});

	menuContent.appendChild(subMenu1);

	// Create & append seafood items

	const subMenu2 = document.createElement('div');
	const subHeading2 = document.createElement('h2');
	subHeading2.classList.add('submenu-heading');
	subHeading2.innerText = 'Seafood';
	subMenu2.appendChild(subHeading2);

	const seafoodMenu = [
		`Grilled shrimp, seared scallops, roasted red snapper, sautéed mussels, herb butter, lemon aioli     28`,
		`Ahi tuna, mango salsa, coconut rice, pineapple glaze, avocado, sesame seeds     24`,
		`Grilled salmon, lemon herb couscous, roasted vegetables, olive tapenade, tzatziki sauce     26`,
		`Blackened crawfish tails, linguine, spicy cream sauce, bell peppers, onions, tomatoes     22`,
	];

	seafoodMenu.forEach((item) => {
		const menu = document.createElement('p');
		menu.innerText = item;
		subMenu2.appendChild(menu);
	});

	menuContent.appendChild(subMenu2);

	// Create & append pasta items

	const subMenu3 = document.createElement('div');
	const subHeading3 = document.createElement('h2');
	subHeading3.classList.add('submenu-heading');
	subHeading3.innerText = 'Pasta';
	subMenu3.appendChild(subHeading3);

	const pastaMenu = [
		`Fettuccine pasta, creamy basil pesto sauce, sautéed bell peppers, zucchini, cherry tomatoes, and grated Parmesan cheese     16`,
		`Linguine pasta, tender lobster meat, roasted garlic, sun-dried tomatoes, spinach, white wine butter sauce     24`,
		`Fettuccine pasta, mixed wild mushrooms, truffle cream sauce, fresh thyme, and shaved Parmesan cheese     18`,
	];

	pastaMenu.forEach((item) => {
		const menu = document.createElement('p');
		menu.innerText = item;
		subMenu3.appendChild(menu);
	});

	menuContent.appendChild(subMenu3);

	// Create & append meat items

	const subMenu4 = document.createElement('div');
	const subHeading4 = document.createElement('h2');
	subHeading4.classList.add('submenu-heading');
	subHeading4.innerText = 'Meat';
	subMenu4.appendChild(subHeading4);

	const meatMenu = [
		`Grilled ribeye steak, rosemary-garlic butter, roasted potatoes, grilled asparagus     28`,
		`Pan-seared chicken breast, honey mustard glaze, quinoa, steamed broccoli     20`,
		`Slow-cooked BBQ pork ribs, coleslaw, baked beans, cornbread     24`,
		`Sliced beef, mixed vegetables, spicy Sriracha sauce, steamed jasmine rice     22`,
		`Grilled salmon fillet, maple bourbon glaze, sweet potato mash, sautéed green     26`,
		`Braised lamb shank, tomato and olive ragu, herb-infused couscous, grilled eggplant     30`,
	];

	meatMenu.forEach((item) => {
		const menu = document.createElement('p');
		menu.innerText = item;
		subMenu4.appendChild(menu);
	});

	menuContent.appendChild(subMenu4);

	// Create & append wine items

	const subMenu5 = document.createElement('div');
	const subHeading5 = document.createElement('h2');
	subHeading5.classList.add('submenu-heading');
	subHeading5.innerText = 'Dessert';
	subMenu5.appendChild(subHeading5);

	const dessertMenu = [
		`Grilled ribeye steak, rosemary-garlic butter, roasted potatoes, grilled asparagus     28`,
		`Pan-seared chicken breast, honey mustard glaze, quinoa, steamed broccoli     20`,
		`Slow-cooked BBQ pork ribs, coleslaw, baked beans, cornbread     24`,
		`Sliced beef, mixed vegetables, spicy Sriracha sauce, steamed jasmine rice     22`,
		`Grilled salmon fillet, maple bourbon glaze, sweet potato mash, sautéed green     26`,
		`Braised lamb shank, tomato and olive ragu, herb-infused couscous, grilled eggplant     30`,
	];

	dessertMenu.forEach((item) => {
		const menu = document.createElement('p');
		menu.innerText = item;
		subMenu5.appendChild(menu);
	});

	menuContent.appendChild(subMenu5);

	// Create & append dessert items

	const subMenu6 = document.createElement('div');
	const subHeading6 = document.createElement('h2');
	subHeading6.classList.add('submenu-heading');
	subHeading6.innerText = 'Wine';
	subMenu6.appendChild(subHeading6);

	const wineMenu = [
		`White`,
		`Chardonnay Blanc Reserve / Napa Valley, California     32`,
		`Sauvignon Blanc Heritage / Marlborough, New Zealand     26`,
		`Pinot Grigio Delicate Breeze / Veneto, Italy     24`,
		`Riesling Elegance / Mosel, Germany     28`,
		`Viognier Enchantment / Rhône Valley, France     30`,
		`Gewürztraminer Spice Fusion / Alsace, France     29`,
		`Albariño Coastal Breeze / Rías Baixas, Spain     27`,
		`Verdejo Sun-Kissed / Rueda, Spain     25`,
		`Red`,
		`Cabernet Sauvignon Reserve / Napa Valley, California     35`,
		`Merlot Velvet Harmony / Bordeaux, France     28`,
		`Pinot Noir Enchanté / Willamette Valley, Oregon     32`,
		`Malbec Richness / Mendoza, Argentina     30`,
		`Syrah/Sirah Midnight Rhapsody / Rhône Valley, France     34`,
		`Zinfandel Old Vine Charm / Sonoma County, California     29`,
	];

	wineMenu.forEach((item) => {
		const menu = document.createElement('p');
		menu.innerText = item;
		if (item === 'White' || item === 'Red') {
			menu.classList.add('wine-heading');
		}

		subMenu6.appendChild(menu);
	});

	menuContent.appendChild(subMenu6);

	content.appendChild(menuContent);
}

export default loadMenu;
