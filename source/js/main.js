new Swiper('.section__slider', {
	keyboard: {
		enabled: true,
		onlyInViewport: true,
	},
	autoHeight: true,
	slidesPerView: 3.3,
	spaceBetween: 40,
	centeredSlides: true,
	//стартовый слайд - отсчет начинается с нуля
	initialSlide: 1,
	// бесконечная прокрутка
	loop: true,
	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
	},
	grabCursor: true,
	//! адаптивность
	//breakpoints: {
	//  320: {
	//    slidesPerView: 1,
	//  },
	//  640: {
	//    slidesPerView: 2,
	//  },
	//  998: {
	//    slidesPerView: 3,
	//  },
	//},
})


//! background animation

var total = 40,
	container = document.getElementById('main'),
	w = window.innerWidth,
	h = window.innerHeight,
	Tweens = [],
	SPs = 1;

for (var i = total; i--;) {
	var Div = document.createElement('div');
	TweenLite.set(Div, {
		attr: {
			class: 'dot'
		},
		x: R(w),
		y: R(h),
		opacity: 0,
	});
	container.appendChild(Div);
	Anim(Div);
	Tweens.push(Div);
};

function Anim(elm) {
	elm.Tween = TweenLite.to(elm, R(20) + 10, {
		bezier: {
			values: [{
					x: R(w),
					y: R(h)
				},
				{
					x: R(w),
					y: R(h)
				}
			]
		},
		opacity: R(1),
		scale: R(1) + 0.5,
		delay: R(2),
		onComplete: Anim,
		onCompleteParams: [elm]
	})
};

for (var i = total; i--;) {
	Tweens[i].Tween.play()
};

window.addEventListener("resize", resize);

function R(max) {
	return Math.random() * max
};

function resize() {
	w = window.innerWidth;
	h = window.innerHeight;

	for (var i = 0; i < total; i++) {
		var fireFly = Tweens[i];
		TweenLite.killTweensOf(fireFly);
		Anim(fireFly);
	}
}

//!   ADVA slider JS settings

document.addEventListener("DOMContentLoaded", function () {
	var slider3 = document.querySelector('.adva .swiper-container');

	function mobileSlider() {
		if (window.innerWidth <= 1020 && slider3.dataset.mobile == 'false') {
			var swiper3 = new Swiper(".adva .swiper-container", {
				slidesPerView: 1,
				spaceBetween: 10,
				pagination: {
					el: ".adva .swiper-pagination",
					type: "bullets",
					clickable: true
				}
			});

			slider3.dataset.mobile = 'true';
		}
		if (window.innerWidth > 1020) {
			slider3.dataset.mobile = 'false';

			if (slider3.classList.contains('swiper-container-initialized')) {
				swiper3.destroy(true, true);
			}
		}
	}

	mobileSlider();
	window.addEventListener('resize', () => {
		mobileSlider();
	});
});