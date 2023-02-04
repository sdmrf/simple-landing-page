gsap.timeline({
	scrollTrigger: {
		trigger: "#story",
		start: "top left",
		// end: "bottom top",
		// end: "+=350%",
		scrub: true,
		pin: true
		// markers: true
	}
})
	.from(".features li:nth-child(1)", { y: innerHeight * -1.5, duration: 2.5, stagger: 0.2 })
	.from(".features li:nth-child(2)", { y: innerHeight * -1.5, duration: 2.5, stagger: 0.2  })
	.from(".features li:nth-child(3)", { y: innerHeight * -1.5, duration: 2.5, stagger: 0.2  })
	.from(".features li:nth-child(4)", { y: innerHeight * -1.5, duration: 2.5, stagger: 0.2  })
	.from(".features li:nth-child(5)", { y: innerHeight * -1.5, duration: 2.5, stagger: 0.2  })
	.from(".features li:nth-child(6)", { y: innerHeight * -1.5, duration: 2.5, stagger: 0.2  })

/*----------------------------------------------------*/
/* Product
------------------------------------------------------ */
const box = document.querySelectorAll('.pbox');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerBottom = window.innerHeight / 5 * 4;
  
  box.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    
    if(boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  })
}


document.querySelectorAll('.add-to-cart').forEach(button => {

    button.addEventListener('click', e => {

        button.classList.toggle('added');

    });

});