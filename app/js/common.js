$(function() {

	$('.main-question').children('h4').on('click', function(){
		$(this).toggleClass('question-opened');
		$(this).siblings().slideToggle();
	});

	$('.show-hide-menu').on('click', function(){
		$(this).toggleClass('show-hide-menu-active');
		$('.header__menu').slideToggle();
	});

	function mainFunc() {
		let totalEl = []
		
		function arrayPush(elem) {
			const testEl = document.querySelectorAll(elem)
			Array.prototype.push.apply(totalEl, testEl);
		}

		arrayPush('.our-works-block__img');
		arrayPush('.mainP-works__img');

		totalEl.forEach((el) => {
			el.addEventListener('mouseenter', (elem) =>
				elem.target.classList.add('outline-shadow')
			)
			el.addEventListener('mouseleave', (elem) =>
				elem.target.classList.remove('outline-shadow')
			)
		});

	}

	mainFunc()
	

	

	// $('.our-works-block__img').hover(
	// 	function() {
	// 		$(this).addClass('outline-shadow');
	// 	}, 
	// 	function() {
	// 		$(this).removeClass('outline-shadow');
	// 	}
	// );


	if ( $(window).width() < 992) {
		$('.header__submenu').removeClass('header__submenu_hover');
		$('.header__submenu').addClass('header__submenu_click');
		$('.menu-item-has-children').on('click', function(){
			$(this).next().slideToggle();
		})
	}

	if ( $(window).width() > 992) {
		$('.header__menu').children('li').children('a').hover(
			function() {
				$(this).addClass('nav__link');
			}, 
			function() {
				$(this).removeClass('nav__link');
			}
		);
		$('.header__submenu_hover').hover(
			function() {
				$(this).siblings().addClass('nav__link');
			}, 
			function() {
				$(this).siblings().removeClass('nav__link');
			}
		)
	}
});
