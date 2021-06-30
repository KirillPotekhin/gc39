/*! GoodCar39 v0.0.1 | (c) 2021 Kirill Potekhin | MIT License | http://link-to-your-git-repo.com */
"use strict";

const rentaAt = document.querySelector('#date-renta-at');
const range = new rangePlugin({
  input: "#date-renta-to"
});
flatpickr(rentaAt, {
  mode: "range",
  minDate: "today",
  "locale": "ru",
  "plugins": [range]
});
const feedbackBtn = document.querySelector(`.main-nav__feedback`);

const scrollToFeedback = () => {
  const feedbackOffsetHeight = document.querySelector(`.feedback`);
  feedbackOffsetHeight.scrollIntoView({
    block: `start`,
    behavior: `smooth`
  });
};

feedbackBtn.addEventListener('click', scrollToFeedback);
const pageHeader = document.querySelector(`.page-header`);
const pageHeaderHeight = pageHeader.offsetHeight;
window.addEventListener(`scroll`, () => {
  const feedbackOffsetHeight = document.querySelector(`.feedback`).offsetTop;
  const pageMainOffsetHeight = document.querySelector(`.page-main--height`).offsetTop;
  console.log(window.scrollY, feedbackOffsetHeight, pageMainOffsetHeight);

  if (window.scrollY < feedbackOffsetHeight || window.scrollY >= pageMainOffsetHeight - pageHeaderHeight) {
    pageHeader.classList.remove(`visually-hidden`);
    console.log(1);
    return;
  }

  console.log(2);
  pageHeader.classList.add(`visually-hidden`);
});

const randomInteger = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}; // const createElements = (container, products) => {
//   const content = document.createElement('div');
//   products.forEach((product, index) => {
//     console.log(`key`, `${translit(product.model.replace(/\s/g, '-').toLowerCase())}-${translit(product.type.replace(/\s/g, '').toLowerCase())}`, index+1);
//     const template = `<article class="catalog__item ${index % 2 !== 0 ? `catalog__item--reverse catalog__item--reverse-color` : ``}">
// 			<div class="container">
// 				<div class="catalog__item-pictures">
//           <div class="catalog__item-picture">
//             <picture>
//               <source media="(min-width: 960px)" srcset="img/${translit(product.model.replace(/\s/g, '-').toLowerCase())}-${translit(product.type.replace(/\s/g, '').toLowerCase())}-1-1024.jpg">
//               <source media="(min-width: 720px)" srcset="img/${translit(product.model.replace(/\s/g, '-').toLowerCase())}-${translit(product.type.replace(/\s/g, '').toLowerCase())}-1-800.jpg">
//               <img class="catalog__item-img" width="288px" height="288px" alt="${product.model} ${product.type} 1" src="img/${translit(product.model.replace(/\s/g, '-').toLowerCase())}-${translit(product.type.replace(/\s/g, '').toLowerCase())}-1-600.jpg">
//             </picture>
// 					</div>
// 					<div class="catalog__item-picture">
//             <picture>
//               <source media="(min-width: 960px)" srcset="img/${translit(product.model.replace(/\s/g, '-').toLowerCase())}-${translit(product.type.replace(/\s/g, '').toLowerCase())}-2-1024.jpg">
//               <source media="(min-width: 720px)" srcset="img/${translit(product.model.replace(/\s/g, '-').toLowerCase())}-${translit(product.type.replace(/\s/g, '').toLowerCase())}-2-800.jpg">
//               <img class="catalog__item-img" width="288px" height="288px" alt="${product.model} ${product.type} 2" src="img/${translit(product.model.replace(/\s/g, '-').toLowerCase())}-${translit(product.type.replace(/\s/g, '').toLowerCase())}-2-600.jpg">
//             </picture>
// 					</div>
// 					<div class="catalog__item-picture">
//             <picture>
//               <source media="(min-width: 960px)" srcset="img/${translit(product.model.replace(/\s/g, '-').toLowerCase())}-${translit(product.type.replace(/\s/g, '').toLowerCase())}-3-1024.jpg">
//               <source media="(min-width: 720px)" srcset="img/${translit(product.model.replace(/\s/g, '-').toLowerCase())}-${translit(product.type.replace(/\s/g, '').toLowerCase())}-3-800.jpg">
//               <img class="catalog__item-img" width="288px" height="288px" alt="${product.model} ${product.type} 2" src="img/${translit(product.model.replace(/\s/g, '-').toLowerCase())}-${translit(product.type.replace(/\s/g, '').toLowerCase())}-3-600.jpg">
//             </picture>
// 					</div>
// 				</div>
// 				<div class="catalog__item-description">
// 					<table class="catalog__table">
// 						<tr class="catalog__table-line">
// 							<td class="catalog__table-cell catalog__table-cell--font">Модель</td>
// 							<td class="catalog__table-cell">${product.model}</td>
// 						</tr>
// 						<tr class="catalog__table-line">
// 							<td class="catalog__table-cell catalog__table-cell--font">Тип</td>
// 							<td class="catalog__table-cell">${product.type}</td>
// 						</tr>
// 						<tr class="catalog__table-line">
// 							<td class="catalog__table-cell catalog__table-cell--font">Размер</td>
// 							<td class="catalog__table-cell">${product.sizeSmall !== `` ? `${product.sizeSmall} / ${product.sizeHigh}` : `${product.sizeHigh}`}</td>
// 						</tr>
// 						<tr class="catalog__table-line">
// 							<td class="catalog__table-cell catalog__table-cell--font">Состав</td>
// 							<td class="catalog__table-cell">${product.composition}</td>
// 						</tr>
// 						<tr class="catalog__table-line">
// 							<td class="catalog__table-cell catalog__table-cell--font">Цвет</td>
// 							<td class="catalog__table-cell">${product.color}</td>
// 						</tr>
// 						<tr class="catalog__table-line">
// 							<td class="catalog__table-cell catalog__table-cell--font">Розничная цена</td>
// 							<td class="catalog__table-cell">
// 								<table>
//                   <tr class="catalog__table-line catalog__table-line--price">
//                     ${product.sizeSmall !== `` ? `<td class="catalog__table-cell catalog__table-cell--padding">${product.sizeSmall}</td>` : ``}
// 										<td class="catalog__table-cell catalog__table-cell--padding">${product.sizeHigh}</td>
// 									</tr>
//                   <tr class="catalog__table-line catalog__table-line--price">
//                     ${product.sizeSmall !== `` ? `<td class="catalog__table-cell">${product.priceSmall}Р</td>` : ``}												
// 										<td class="catalog__table-cell">${product.priceHigh}Р</td>
// 									</tr>
// 								</table>
// 							</td>
// 						</tr>
// 					</table>
// 				</div>
// 			</div>
//     </article>`;
//     content.insertAdjacentHTML(`beforeend`, template);
//   });
//   container.append(content);
// };
// const productsSeasons = [];
// const productsSeasonFall = products.slice().filter((it) => it.season === `fall`);
// const productsSeasonWinter = products.slice().filter((it) => it.season === `winter`);
// const productsSeasonSummer = products.slice().filter((it) => it.season === `summer`);
// productsSeasons.push(productsSeasonFall);
// productsSeasons.push(productsSeasonWinter);
// productsSeasons.push(productsSeasonSummer);
// const tabs = document.querySelector(`.tabs`);
// const tabsButtons = tabs.querySelectorAll(`.tabs__btn`);
// const tabsContents = document.querySelectorAll(`.catalog__tabs-content`);
// Array.from(tabsContents).forEach((tabContent, index) => createElements(tabContent, productsSeasons[index]));
// tabsButtons.forEach((it, i) => {
//   it.addEventListener(`click`, (evt) => {
//     evt.preventDefault();
//     if (it.classList.contains(`tabs__btn--active`)) {
//       return;
//     }
//     it.classList.add(`tabs__btn--active`);
//     const itemNotActive = Array.from(tabsButtons).filter((tab) => tab.id !== evt.target.id);
//     itemNotActive.forEach((it) => {
//       if (it.classList.contains(`tabs__btn--active`)) {
//         it.classList.remove(`tabs__btn--active`);
//       }
//     });
//     Array.from(tabsContents).forEach((it, index) => {
//       if ((i !== index) & (!it.classList.contains(`visually-hidden`))) {
//         it.classList.add(`visually-hidden`);
//       }
//       if ((i === index) & (it.classList.contains(`visually-hidden`))) {
//         it.classList.remove(`visually-hidden`);
//         // $('.catalog__item-pictures').slick('resize');
//         // const catalogItemPictures = it.querySelectorAll(`.catalog__item-pictures`);
//         // Array.from(catalogItemPictures).forEach((item) => {
//         //   const tabImg = item.querySelector(`.catalog__item-img`);
//         //   const widthSlickContainer = item.querySelector(`.slick-list`).offsetWidth;
//         //   tabImg.style.width = `${widthSlickContainer}px`;
//         //   tabImg.style.height = `auto`;
//         //   const marginReset = item.querySelector(`.slick-track`);
//         //   marginReset.style.margin = 0;
//         // });
//         $(`.catalog__item-pictures`).slick(`reinit`);
//       }
//     });
//   });
// });
// const rescueSizeImage = () => {
//   const tabImgs = document.querySelectorAll(`.catalog__item-img`);
//   tabImgs.forEach((item) => {
//     const widthSlickContainer = item.querySelector(`.slick-list`).offsetWidth;
//     item.style.width = `${widthSlickContainer}px`;
//     item.style.height = `auto`;
//     console.log(item.style);
//   });          
// };
// window.addEventListener(`scroll`, rescueSizeImage);
// window.removeEventListener(`scroll`, rescueSizeImage);
// window.addEventListener(`resize`, () => {
//   const tabImgs = document.querySelectorAll(`.catalog__item-img`);
//   tabImgs.forEach((it) => it.style.width = `100%`);
// });
// document.addEventListener('DOMContentLoaded', () => {
//   const ajaxSend = (formData) => {
//       fetch('/php/mail.php', { // файл-обработчик 
//           method: 'POST',
//           headers: {
//               'Content-Type': 'application/x-www-form-urlencoded', // отправляемые данные 
//           },
//           body: formData
//       })
//           .then(
//             (response) => {
//               const respond = response.json();
//               console.log('Сообщение отправлено методом fetch');
//               console.log('response', respond);
//               console.log('response status', response.status);
//           })
//           .catch(
//             error => console.error(error))
//   };
//   const forms = document.getElementsByTagName('form');
//   for (let i = 0; i < forms.length; i++) {
//       forms[i].addEventListener('submit', function (e) {
//           e.preventDefault();
//           const formData = new FormData(this);
//           console.log(`send mail`, formData);
//           ajaxSend(formData);
//           this.reset(); // очищаем поля формы 
//       });
//   };
// });