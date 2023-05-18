const slider = document.querySelector('.photo-slider');
const slederItems = document.querySelectorAll('.slider__item');
const sliderLine = document.querySelector('.photo-slider__line');
const sliderBtns = document.querySelectorAll('.slider__btn');

// createSlider function
import {createSlider} from './ui_functions.js'

createSlider(sliderLine, slederItems)