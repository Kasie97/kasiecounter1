let add = document.getElementById('increase');
let remove = document.getElementById('decrease');

let num= document.getElementById('number');
let integer= 0;

add.addEventListener('click', function() {
	integer += 1;
	num.innerHTML = integer;
})

remove.addEventListener('click', function() {
	integer -= 1;
	num.innerHTML = integer;
})