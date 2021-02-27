'use strict';
let container = document.querySelector('.container');
let increaseDiv = document.querySelectorAll('.container div');
let increaseImage = document.querySelectorAll('.container div img');
let decreaseDiv = document.querySelectorAll('.new-wrap');
let decreaseImage = document.querySelectorAll('.new-img');
let close = document.querySelectorAll('.close');

for (let i = 0; i < increaseDiv.length; i++){
	increaseDiv[i].onclick = function(){
		increaseDiv[i].classList.remove('wrap');
		increaseDiv[i].classList.add('new-wrap');
		document.body.style.background = "#3b3b3b";
		document.body.style.opacity = "0.5";
		container.style.justifyContent = "center";	
	}
}

for (let i = 0; i < increaseImage.length; i++){
	increaseImage[i].onclick = function(){
		increaseImage[i].classList.remove('image');
		increaseImage[i].classList.remove('first-md');
		increaseImage[i].classList.remove('first-sm');
		increaseDiv[i].classList.add('new-img');
	}
}

for (let i = 0; i < decreaseDiv.length; i++){
	decreaseDiv[i].onclick = function(){
		decreaseDiv[i].classList.remove('new-wrap');
		decreaseDiv[i].classList.add('wrap');
		document.body.style.background = "#000";
		document.body.style.opacity = "1";
		container.style.justifyContent = "space-around";
	}
}

for (let i = 0; i < decreaseImage.length; i++){
	decreaseImage[i].onclick = function(){
		decreaseImage[i].classList.remove('image');
		decreaseImage[i].classList.remove('first-md');
		decreaseImage[i].classList.remove('first-sm');
		decreaseImage[i].classList.add('new-img');
	}
}

