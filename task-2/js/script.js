'use strict';
let actualDate = new Date(); 

function getDate(date){
	let days = date.getDate();
  	if (days < 10) days = '0' + days;
  	let months = date.getMonth() + 1;
 	if (months < 10) months = '0' + months;
  	let years = date.getFullYear() % 100;
  	if (years < 10) years = '0' + years;
  	let hours = date.getHours();
  	if (hours < 10) hours = '0' + hours;
  	let minutes = date.getMinutes();
  	if (minutes < 10) minutes = '0' + minutes;
 	return days + '.' + months + '.' + years + ' ' + hours + ':' + minutes;
}

function checkImagesAndDate(){
	let imageCount = document.querySelectorAll('img');
	let countAndDate; 
	countAndDate = imageCount.length + ' изображений: ' + getDate(actualDate);
	return countAndDate;
}

function writeHead() {
	let writeValue = document.querySelector('h1');
	writeValue.innerHTML = checkImagesAndDate();
	return checkImagesAndDate();
}

writeHead();
