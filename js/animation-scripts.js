function isVis(el)
        {
            let rect = el.getBoundingClientRect();
            let windowHeight = (window.innerHeight || document.documentElement.clientHeight);
            let vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);

            return (vertInView);
        }


window.onresize = () => {
    let menu = document.getElementById("collapse");
    menu.checked = false;
}

let scrollPos = 0;
let prevPos;
let ticking = false;


window.onscroll = () => {
    let sImg = document.getElementsByClassName("main-image")[0];

    if (!isVis(sImg)) {
	return 0;
    }
    
	
    prevPos = scrollPos;
    scrollPos = window.scrollY;
 
    
     if (!ticking) {
	 window.requestAnimationFrame(() => {
	    sImg.classList.toggle("anim-forth", prevPos < scrollPos);
	    sImg.classList.toggle("anim-back", prevPos > scrollPos);
	    sImg.classList.toggle("anim-mid", scrollPos == 0);
	    ticking = false;
	}, );
	
	ticking = true;
    }
    
   
}
