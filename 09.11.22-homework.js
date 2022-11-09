// ==UserScript==
// @name         Zapmeta Bot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Bot for Zapmeta - Задание 14 JS
// @author       Evgeniya Sadovskaya
// @match        https://www.zapmeta.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==
let links = document.links;
let homeSearch = document.getElementsByClassName("search-bar--align-center")[0];
let buttonSearch = document.querySelector(".search-field__submit-button.vsi");
let keywords = ["10 самых популярных шрифтов от Google", "Отключение редакций и ревизий в WordPress", "Вывод произвольных типов записей и полей в WordPress"];
let keyword = keywords[getRandom(0, keywords.length)];

if (homeSearch !== undefined) {
	document.getElementsByName("q")[0].value = keyword;
	buttonSearch.click();
} else {
	for (let i = 0; i < links.length; i++) {
		if (links[i].href.indexOf("napli.ru") !== -1) {
			let link = links[i];
			console.log("Нашел строку " + links[i]);
			window.open(link, "_self");
			break;
		}
	}
}
function getRandom(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}
