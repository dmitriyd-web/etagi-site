$(document).ready(function(){
	
	//	mobile menu
	$("header .mobile-toggle").on("click", function() {
		$("header .mobile-toggle, header .row .header-menu ul").toggleClass("open")
	})
	
	//	open objects dropdowm
	const objectsDropdown = document.querySelector(".objects-dropdown")
	const objectsDropdownBtn = document.querySelector(".objects-dropdown__chosen")
	const objectsChosenInfo = document.querySelector(".objects-chosen-info")
	const objectsDropdownList = document.querySelectorAll(".objects-dropdown__list li")

	if ( objectsDropdownBtn ) {
		objectsDropdownBtn.addEventListener( "click" , () => {
			objectsDropdown.classList.toggle("open_list")
		})
	}
	
	objectsDropdownList.forEach(el => el.addEventListener( "click" , () => {
		objectsChosenInfo.innerText = el.textContent
		objectsDropdown.classList.remove("open_list")
	}))
	
	//	objects slider
	$('.owl-carousel-1').owlCarousel({
		responsive: {
			0: {
				margin: 18,
				items: 2
			},
			767: {
				margin: 40,
				items: 2
			}
		},
		loop: true,
		nav: true
	})
	
	//	examples slider
	$('.owl-carousel-2').owlCarousel({
		margin: 0,
		items: 1,
		loop: true,
		nav: true
	})
	
	//	single cart slider
	$('.owl-carousel-3').owlCarousel({
      items: 1,
      loop: true,
      dots: true,
	  nav: true,
      dotsContainer: '.thumbs-3',
    })
	$('.owl-carousel-3 .thumb').click(function(){
		$('.owl-carousel-3').trigger('to.owl-carousel-3', [$(this).index(), 300]);
	})
	$('.owl-carousel-single__prev').on('click', function(){
		$('.owl-carousel-3 .owl-prev').click()
	})
	$('.owl-carousel-single__next').on('click', function(){
		$('.owl-carousel-3 .owl-next').click()
	})
	
	//	single cart slider complecs
	$('.owl-carousel-4').owlCarousel({
      items: 1,
      loop: true,
      dots: true,
	  nav: true,
      dotsContainer: '.thumbs-4',
    })
	$('.owl-carousel-4 .thumb').click(function(){
		$('.owl-carousel-4').trigger('to.owl-carousel-4', [$(this).index(), 300]);
	})
	$('.owl-carousel-single__prev').on('click', function(){
		$('.owl-carousel-4 .owl-prev').click()
	})
	$('.owl-carousel-single__next').on('click', function(){
		$('.owl-carousel-4 .owl-next').click()
	})
	
	//	related slider
	$('.owl-carousel-5').owlCarousel({
		margin: 0,
		responsive: {
			0: {
				items: 1
			},
			767: {
				items: 3
			}
		},
		loop: true,
		nav: true
	})
	
	//	form checkbox
	$(".checkbox-lite").on("click", function() {
		$(this).toggleClass("checked")
	})
	
	//	quiz checkbox
	$(".quiz .quiz-window .quiz-answers .answer").on("click", function() {
		$(".quiz .quiz-window .quiz-answers .answer").removeClass("checked")
		$(this).addClass("checked")
	})
	
	//	accordion
	$(".accordion-btn").on("click", function() {
		if ( $(this).parent(".accordion-item").hasClass("open") ) {
			$(this).parent(".accordion-item").removeClass("open")
		}	else {
			$(".accordion-item").removeClass("open")
			$(this).parent(".accordion-item").addClass("open")
		}
	})
	
	//	open stage dropdowm
	const stageDropdown = document.querySelector(".stage-dropdown")
	const stageDropdownBtn = document.querySelector(".stage-dropdown__chosen")
	const stageChosenInfo = document.querySelector(".stage-chosen-info")
	const stageDropdownList = document.querySelectorAll(".stage-dropdown__list li")

	if ( stageDropdownBtn ) {
		stageDropdownBtn.addEventListener( "click" , () => {
			stageDropdown.classList.toggle("open_list")
		})
	}

	stageDropdownList.forEach(el => el.addEventListener( "click" , () => {
		stageChosenInfo.innerText = el.textContent
		stageDropdown.classList.remove("open_list")
	}))
	
	//	open apartment dropdowm
	const apartmentDropdown = document.querySelector(".apartment-dropdown")
	const apartmentDropdownBtn = document.querySelector(".apartment-dropdown__chosen")
	const apartmentChosenInfo = document.querySelector(".apartment-chosen-info")
	const apartmentDropdownList = document.querySelectorAll(".apartment-dropdown__list li")

	if ( apartmentDropdownBtn ) {
		apartmentDropdownBtn.addEventListener( "click" , () => {
			apartmentDropdown.classList.toggle("open_list")
		})
	}
	
	apartmentDropdownList.forEach(el => el.addEventListener( "click" , () => {
		apartmentChosenInfo.innerText = el.textContent
		apartmentDropdown.classList.remove("open_list")
	}))

	//	open catalog dropdowm
	const catalogDropdown = document.querySelector(".catalog-dropdown")
	const catalogDropdownBtn = document.querySelector(".catalog-dropdown__chosen")
	const catalogChosenInfo = document.querySelector(".catalog-chosen-info")
	const catalogDropdownList = document.querySelectorAll(".catalog-dropdown__list li")

	if ( catalogDropdownBtn ) {
		catalogDropdownBtn.addEventListener( "click" , () => {
			catalogDropdown.classList.toggle("open_list")
		})
	}
	
	catalogDropdownList.forEach(el => el.addEventListener( "click" , () => {
		catalogChosenInfo.innerText = el.textContent
		catalogDropdown.classList.remove("open_list")
	}))
})