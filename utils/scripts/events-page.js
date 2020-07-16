const infoBtns  = document.querySelectorAll('span.more-details');
const closeButton = document.querySelectorAll('.close-button');

//cancel button
const cancelBtn = document.querySelectorAll('.cancel-btn');
//Functions

infoBtns.forEach( btn => {
	btn.addEventListener('click', eventBtn => {
		const detailsWrapper = eventBtn.target.parentElement.nextElementSibling;
		detailsWrapper.classList.add('modal-view');
		bodyWrapper.classList.add('.body-inactive');

	});
});

closeButton.forEach( btn => {
	btn.addEventListener('click', eventBtn => {
		const detailsWrapper = eventBtn.target.parentElement.parentElement;
		detailsWrapper.classList.remove('modal-view');
	});
});

//cancel Button Function

cancelBtn.forEach( btn => {
	btn.addEventListener('click', eBtn => {
		const eventName = eBtn.target.previousElementSibling;

		let options = {
			method: 'POST',
			headers: {'Content-Type':'application/json'},
			body:JSON.stringify({
				request: 'delete',
				title: eBtn.target.previousElementSibling.textContent,
			})
		}
		fetch('/011entertainment/events', options)
	});
});