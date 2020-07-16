const modalBtn = document.querySelectorAll('.reg-btn');
const modalBg = document.querySelector('.modal-bg');
const closeBtn = document.querySelector('.close-btn');
const month = document.querySelector('#month');
const mainDate = document.querySelector('.main-date').textContent;
const mainTime = document.querySelector('.main-time').textContent;
const menuBtn = document.querySelector('.icon');
const sideBar = document.querySelector('header ul');


//Form
const myForm = document.querySelector('#Form');
const eventValue = document.querySelector('.event');
const nameValue = document.querySelector('.fullname');
const emailValue = document.querySelector('.email');

menuBtn.addEventListener('click', () => {
	sideBar.classList.toggle('show');
 	menuBtn.classList.toggle('icon-active');
});




closeBtn.addEventListener('click', (element) => {
	modalBg.classList.remove('bg-active');
});
const m = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
month.textContent =  m[new Date().getMonth()];

let count  = new Date(mainDate+" " +mainTime+":00").getTime();
let x = setInterval(() => {
	let now = new Date().getTime();
	let d = count - now;

	let days = Math.floor(d/(1000*60*60*24));
	let hours = Math.floor((d%(1000*60*60*24))/(1000*60*60));
	let minutes = Math.floor((d%(1000*60*60))/(1000*60))
	let seconds = Math.floor((d%(1000*60))/1000);
	document.querySelector('#days').textContent = days;
	document.querySelector('#hours').textContent = hours;
	document.querySelector('#minutes').textContent = minutes;
	document.querySelector('#seconds').textContent = seconds;

	if (d <= 0) {
		clearInterval(x);
	}
}, 1000);


//Form Action

modalBtn.forEach(element => {
	element.addEventListener('click', (event)=> {
		modalBg.classList.add('bg-active');
		eventValue.value = event.target.previousElementSibling.textContent;
		console.log(eventValue.value)
	});
});
// myForm.addEventListener('submit', event => {
// 	event.preventDefault();
// 	const formData = {
// 		'event': eventValue.value,
// 		'name' : nameValue.value,
// 		'email' : emailValue.value

// 	}
// 	//const formData = `${eventValue.name}=${eventValue.value}`
// 	const options = {
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/json'
// 		},
// 		body: JSON.stringify(formData)
// 	}
// 	fetch('/011entertainment', options)
// 	.then( response => {
// 		return (response.text());
// 	})
// 	.then( text => {
// 		console.log(text);
// 	});	

// });