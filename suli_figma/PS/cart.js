
document.querySelectorAll('.counter .minus').forEach(function (element) {
	element.addEventListener('click', function(event) {
		event.preventDefault();
		let input = this.parentElement.querySelector('.quantity');
		let count = parseInt(input.value) - 1;
		count = count < 1 ? 1 : count;
		input.value = count;
	});
});


document.querySelectorAll('.counter  .plus').forEach(function (element) {
	element.addEventListener('click', function(event) {
		event.preventDefault();
		let input = this.parentElement.querySelector('.quantity');
		let count = parseInt(input.value) + 1;
		count = count > parseInt(input.dataset.maxCount) ? parseInt(input.dataset.maxCount) : count;
		input.value = parseInt(count);
	});
});

document.querySelectorAll('.counter .quantity').forEach(function (element) {
	element.addEventListener("change", function(event) {
		event.preventDefault();
		if (this.value.match(/[^0-9]/g)) {
			this.value = this.value.replace(/[^0-9]/g, '');
		}
		if (this.value == "") {
			this.value = 1;
		}
		if (this.value > parseInt(this.dataset.maxCount)) {
			this.value = parseInt(this.dataset.maxCount);
		}
	});
});