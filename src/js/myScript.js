"use strict"
new WOW().init();  


/*let question = confirm("Рассчитаем стоимость и сроки?", "Да или нет");
if (question === true)
   {alert ("Тогда начнем!!!");
	
let type = +prompt("Какой тип сайта Вас интересует? (указать номер)", "1 - Сайт-визитка 2 - Интернет-магазин 3 - Корпоративный сайт");
if (type <= 3)
   {alert ("Вы выбрали " + ": " + type);}
	else {
    alert ("Вы ничего не выбрали!");}
	if (type == 1){
		alert ("Стоимость - 5 000руб");
	console.log(type + " = " + "5000");}
	if (type == 2){
		alert ("Стоимость - 20 000руб");
	console.log(type + " = " + "20000");}
	if (type == 3){
		alert ("Стоимость - 10 000руб");
	console.log(type + " = " + "10000");}
	console.log(type);
		
let design = +prompt("Какой стиль дизайна Вас интересует?", "1 - Классический 2 - Минимализм 3 - Рисованный 4 - Ретро");		
if (design <= 4){		
alert("Вы выбрали " + ": " + design);}		
	else {	
    alert ("Вы ничего не выбрали!");}		
	if (design == 1){	
		alert ("Стоимость - 1 000руб");
	console.log(design + " = " + "1000");}
	if (design == 2){	
		alert ("Стоимость - 2 000руб");
	console.log(design + " = " + "2000");}
	if (design == 3){	
		alert ("Стоимость - 3 000руб");
	console.log(design + " = " + "3000");}
	if (design == 4){	
		alert ("Стоимость - 4 000руб");
	console.log(design + " = " + "4000");}
    console.log(design);																		
		
		
let adaptive = prompt("Должен ли сайт быть адаптивен?", "Да или Нет");		
if (adaptive === "Да" || "Нет"){		
alert("Вы выбрали " + ": " + adaptive);}		
else {		
alert ("Вы ничего не выбрали!");}		
	if (adaptive === "Да" || adaptive === "да"){	
		alert ("Стоимость - 15 000руб");
	console.log(adaptive + " = " + "15000");}
	if (adaptive === "Нет" || adaptive === "нет"){	
		alert ("Стоимость - 5 000руб");
	console.log(adaptive + " = " + "5000");}
	console.log(adaptive);	
    
let sum = 0;
if (type == 1) {sum += 5000;}
if (type == 2) {sum += 20000;}
if (type == 3) {sum += 10000;}
if (design == 1) {sum += 1000;}
if (design == 2) {sum += 2000;}
if (design == 3) {sum += 3000;}
if (design == 4) {sum += 4000;}
if (adaptive == "Да" || "да") {sum += 15000;}
if (adaptive == "Нет" || "нет") {sum += 5000;}
	alert ("Стоимость Вашего сайта" + " - " + sum + " рублей");
	console.log("Сумма" + " - " + sum);
	
	let time = 0;
if (type == 1) {time += 2;}
if (type == 2) {time += 10;}
if (type == 3) {time += 7;}
if (design == 1) {time += 1;}
if (design == 2) {time += 1;}
if (design == 3) {time += 3;}
if (design == 4) {time += 3;}
if (adaptive == "Да" || "да") {time += 2;}
if (adaptive == "Нет" || "нет") {time += 1;}
	alert ("Срок исполнения вашего заказа" + " - " + time + " дней");
	console.log("Срок" + " - " + time);
}
else {
    alert ("Вы нажали отмена");
	}console.log(question); */


$('.container a').on('click', function() {
    let href = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(href).offset().top - 50 + "px"}, {
           });});
	
					

$(document).ready(function() {
  $('.image-link').magnificPopup({type:'image'});
});

let options = {threshold: [1.0]};				
let observer = new IntersectionObserver(onEntry, options);				
let elements = $('.element-animation');				
elements.each((i, el) => {				
	observer.observe(el);
});			
				
function onEntry(entry){				
	entry.forEach(change => {			
		if (change.isIntersecting){	
	$('.element-animation').each(function () {
   $(this).prop('Counter', 0).animate({
    Counter: $(this).text()
    } , {
     duration: 1000,
     easing: 'swing',
     step: function (now) {
        $(this).text(Math.ceil(now));
	     }
    });
});
		change.target.classList.add('show-animation');	
					}		
	});			
};				

$("#exampleInputPhone").mask("+7(999) 999-9999");

$('form').submit(function(event){
	event.preventDefault();
	$.ajax({
		type:"POST",
	url:"php/mail.php",
	data:$(this).serialize()
	}).done(function(){
		$(this).find("input").val("");
		alert("Письмо успешно отправлено!");
		$("form").trigger("reset");
		$('.popup').fadeOut();
	});
	return false;
});







































