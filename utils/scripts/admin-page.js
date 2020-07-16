const menuBtn = document.querySelector('.icon');
const sideBar = document.querySelector('.side-bar');
const modalBtn = document.querySelector('.reg-btn');
const modalBg = document.querySelector('.modal-bg');
const closeBtn = document.querySelector('.close-btn');
const bodyWrapper = document.querySelector('.body-wrapper');

menuBtn.addEventListener('click', () => {
	sideBar.classList.toggle('show-side-bar');
 	menuBtn.classList.toggle('icon-active');
});


modalBtn.addEventListener('click', ()=> {
	modalBg.classList.add('bg-active');
	bodyWrapper.classList.add('.body-inactive');
});

closeBtn.addEventListener('click', (element) => {
	modalBg.classList.remove('bg-active');
	bodyWrapper.classList.remove('.body-inactive');
});


