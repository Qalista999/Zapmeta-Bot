// ==UserScript==
// @name         Zapmeta Bot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Bot for Zapmeta - Задание 15 JS
// @author       Evgeniya Sadovskaya
// @match        https://www.zapmeta.com/*
// @match        https://napli.ru/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==
let links = document.links;
let homeSearch = document.getElementsByClassName("search-bar--align-center")[0];
let buttonSearch = document.querySelector(".search-field__submit-button.vsi");
let keywords = ["Установка и настройка Git блог",
								"10 самых популярных шрифтов от Google",
								"Отключение редакций и ревизий в WordPress",
								"Вывод произвольных типов записей и полей в WordPress"
							 ];
let keyword = keywords[getRandom(0, keywords.length)];
let ZapmetaInput = document.getElementsByName ("q")[0];

if (homeSearch !== undefined) {
	let i = 0;
	let timerId = setInterval (() => {
		ZapmetaInput.value += keyword[i];
		i++;
		if (i == keyword.length) {
			clearInterval(timerId);
			buttonSearch.click();
		}
	}, 150);

} else if (location.hostname == "napli.ru") {
	console.log("Мы на целевом сайте");
	setInterval(() => {
		let index = getRandom(0, links.length);
		if (getRandom(0, 101) > 70) {
			//console.log(getRandom);
			location.href = "https://www.zapmeta.com/";
		}

		if (links[index].href.indexOf("napli.ru") !== -1) window.open(links[index], "_self");
	}, getRandom(3000, 5000));

} else {
	let nextPage = true;
	for (let i = 0; i < links.length; i++) {
		if (links[i].href.indexOf("napli.ru") !== -1) {
			let link = links[i];
			nextPage = false;
			console.log("Нашел строку " + links[i]);
			setTimeout(()=>{
				window.open(link, "_self");
			}, getRandom(2000, 3000));
			break;
		}
	}

	if (document.querySelector(".pagination__item--active").innerText === '5') {
		nextPage = false;
		location.href = "https://www.zapmeta.com/";
	}
	if (nextPage) {
		setTimeout(() => {
			document.getElementsByClassName("pagination__link pagination__link--chevron")[1].click()
			//location.href = document.getElementsByClassName("pagination__link")[6];
			//let next = document.getElementsByClassName("pagination__link pagination__link--chevron")[1];
			//window.open(next, "_self");
			//let next = document.getElementsByClassName(".pagination__item--next");
			//document.querySelector(".pagination__item--next").click();
			//window.open(next, "_self");
			//window.open(document.querySelector(".pagination__item--next"), "_self");
			//let next = document.getElementsByClassName("pagination__item pagination__item--next");
			//window.open(next, "_self");
			//let next1 = document.querySelector(".pagination__item--next").innerHTML
			//a.pagination__link.pagination__link--chevron
			//a.pagination__link.pagination__link--next
			//window.open(next1, "_self");
			//window.open(document.getElementsByClassName("pagination__item pagination__item--next"), "_self");
		}, getRandom(2000, 4000));
	}
}

function getRandom(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}
