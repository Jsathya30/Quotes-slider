
let quotesSlides=document.getElementsByClassName('quotes-slide');
console.log(quotesSlides);
let index=0;

function nextslide(){
	index++;
	if(index<quotesSlides.length){
		for(let i=0;i<quotesSlides.length;i++){
			quotesSlides[i].classList.remove("active");
			quotesSlides[i].classList.add("hide");
		}
		quotesSlides[index].classList.add("active");
	}
	else{
		index=0;
		quotesSlides[quotesSlides.length-1].classList.remove("active");
		quotesSlides[quotesSlides.length-1].classList.add("hide");
	}
	quotesSlides[index].classList.add("active");
}
setInterval(nextslide,5000);


// function prevslide(){
	// index--;
	// if(index<quotesSlides.length&&index>=0){
		// console.log(index);
		// for(let i=quotesSlides.length-1;i>0;i--){
			// quotesSlides[i].classList.remove("active");
			// quotesSlides[i].classList.add("hide");
		// }
		  // quotesSlides[index].classList.remove('hide');
	      // quotesSlides[index].classList.add('active');
	// }
	// else{
		// index=quotesSlides.length-1;
	 // quotesSlides[0].classList.remove('active');
	 // quotesSlides[0].classList.add('hide');
	 // quotesSlides[index].classList.add('active')
	// }
// }