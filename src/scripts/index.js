const slederItems = document.querySelectorAll('.slider__item');
const sliderLine = document.querySelector('.photo-slider__line');
const sliderBtns = document.querySelectorAll('.slider__btn');

const firstDaySlederItems = document.querySelectorAll('.day-one__slider__item');
const firstDaySliderLine = document.querySelector('.day-one__photo-slider__line');
const firstDaySliderBtns = document.querySelectorAll('.one-day__slider-btn');

const secondDaySlederItems = document.querySelectorAll('.day-two__slider__item');
const secondDaySliderLine = document.querySelector('.day-two__photo-slider__line');
const secondDaySliderBtns = document.querySelectorAll('.two-day__slider-btn');

const thirdDaySlederItems = document.querySelectorAll('.day-three__slider__item');
const thirdDaySliderLine = document.querySelector('.day-three__photo-slider__line');
const thirdDaySliderBtns = document.querySelectorAll('.three-day__slider-btn');

const fourthDaySlederItems = document.querySelectorAll('.day-four__slider__item');
const fourthDaySliderLine = document.querySelector('.day-four__photo-slider__line');
const fourthDaySliderBtns = document.querySelectorAll('.four-day__slider-btn');

const fifthDaySlederItems = document.querySelectorAll('.day-fifth__slider__item');
const fifthDaySliderLine = document.querySelector('.day-fifth__photo-slider__line');
const fifthDaySliderBtns = document.querySelectorAll('.fifth-day__slider-btn');

const sixthDaySlederItems = document.querySelectorAll('.day-sixth__slider__item');
const sixthDaySliderLine = document.querySelector('.day-sixth__photo-slider__line');
const sixthDaySliderBtns = document.querySelectorAll('.sixth-day__slider-btn');

const sevenDaySlederItems = document.querySelectorAll('.day-seven__slider__item');
const sevenDaySliderLine = document.querySelector('.day-seven__photo-slider__line');
const sevenDaySliderBtns = document.querySelectorAll('.seven-day__slider-btn');

// createSlider function
import {createSlider} from './ui_functions.js'

createSlider(sliderLine, slederItems, sliderBtns);
createSlider(firstDaySliderLine, firstDaySlederItems, firstDaySliderBtns);
createSlider(secondDaySliderLine, secondDaySlederItems, secondDaySliderBtns);
createSlider(thirdDaySliderLine, thirdDaySlederItems, thirdDaySliderBtns);
createSlider(fourthDaySliderLine, fourthDaySlederItems, fourthDaySliderBtns);
createSlider(fifthDaySliderLine, fifthDaySlederItems, fifthDaySliderBtns);
createSlider(sixthDaySliderLine, sixthDaySlederItems, sixthDaySliderBtns);
createSlider(sevenDaySliderLine, sevenDaySlederItems, sevenDaySliderBtns);

fetch(`http://gutendex.com/books?topic=Adventure&languages=en`)
.then(request => request.text())
.then(result => console.log(JSON.parse(result)))