const menuBtn = document.querySelector('.icon');
const sideBar = document.querySelector('header ul');

menuBtn.addEventListener('click', () => {
	sideBar.classList.toggle('show');
 	menuBtn.classList.toggle('icon-active');
});