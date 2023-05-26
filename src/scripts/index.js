const slider = document.querySelector('.photo-slider');
const slederItems = document.querySelectorAll('.slider__item');
const sliderLine = document.querySelector('.photo-slider__line');
const sliderBtns = document.querySelectorAll('.slider__btn');

const firstDaySlider = document.querySelector('.day-one__photo-slider');
const firstDaySlederItems = document.querySelectorAll('.day-one__slider__item');
const firstDaySliderLine = document.querySelector('.day-one__photo-slider__line');
const firstDaySliderBtns = document.querySelectorAll('.one-day__slider-btn');

// createSlider function
import {createSlider} from './ui_functions.js'

createSlider(sliderLine, slederItems, sliderBtns);
createSlider(firstDaySliderLine, firstDaySlederItems, firstDaySliderBtns);

fetch(`http://gutendex.com/books?topic=Adventure&languages=en`)
.then(request => request.text())
.then(result => console.log(JSON.parse(result)))