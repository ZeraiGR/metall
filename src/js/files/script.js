// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";

export function headerFixed() {
    const header = document.querySelector('.header'),
        windowHeight = document.documentElement.clientHeight,
        arrowTopBtn = document.querySelector('.arrow-top');

    window.addEventListener('scroll', function () {
        if (window.scrollY > windowHeight) {
            header.classList.add('fixed');
            arrowTopBtn.classList.add('active');
        } else {
            header.classList.remove('fixed');
            arrowTopBtn.classList.remove('active');
        }
    });
}

export function initSlider() {
	const openFormBtn = document.querySelector('.slider__formbtn');
	const closeFormBtn = document.querySelector('.slider__form-close');
	const wrapper = document.querySelector('.slider-container');

	if (openFormBtn && closeFormBtn) {
		openFormBtn.addEventListener('click', () => {
			wrapper.classList.add('open');
		});

		closeFormBtn.addEventListener('click', () => {
			wrapper.classList.remove('open');
		})
	}


	// const btnPrev = document.querySelector('.btn-prev');
	// const btnNext = document.querySelector('.btn-next');
	// const sliders = document.querySelectorAll('.slider__slide');
	// const slidersBox = document.querySelector('.slider__slides');

	// btnNext.addEventListener('click', (e) => {
		
	// 	sliders.forEach((slide, i, arr) => {
	// 		if (slide.classList.contains('active')) {
	// 			slide.classList.remove('active');

	// 			if (i === 0) {
	// 				sliders[2].classList.add('active');
	// 			} else {
	// 				sliders[i - 1].classList.add('active');
	// 			}


	// 			const clone = sliders[i].cloneNode();
	// 			slidersBox.append(clone);
	// 			clone.remove();
	// 			slidersBox.prepend(sliders[i]);
	// 		}
	// 	})
	// })
}