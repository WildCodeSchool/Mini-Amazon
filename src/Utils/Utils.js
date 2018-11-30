import axios from 'axios';

export let TRAD = {};

export const countTotalPrice = (cart) => {
  let totalPrice = 0;
  cart.map(article => {
    return totalPrice += article.price;
  })
  return totalPrice.toFixed(2);
}

export const setLanguage = (lang) => {
  localStorage.setItem('lang', lang);
}

if(localStorage.getItem('lang')) {
  let lang = localStorage.getItem('lang');
  TRAD = require(`../Trads/${lang}.json`);
} else {
  TRAD = require(`../Trads/EN.json`);
}