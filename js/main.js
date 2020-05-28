//initialization of AOS
AOS.init({
	easing: 'ease',
	duration: 1500
});
//toggle menu icon
let hamburgerMenu = document.querySelector('.hamburger-menu');
hamburgerMenu.addEventListener('click', () => {
	hamburgerMenu.classList.toggle('open');
	document.querySelector('.nav-list').classList.toggle('open');
});

//totop btn
let totopBtn = document.querySelector('.footer-icon');

totopBtn.addEventListener('click', (e) => {
	e.preventDefault();
	//use scroll to view web API
	document.querySelector('#home').scrollIntoView({
		behavior: 'smooth'
	});
});
