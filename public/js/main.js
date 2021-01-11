/*....................................................
.........Event Listener portfolio...................*/

let list = document.getElementsByClassName("list");
let img = document.getElementsByClassName("portfolio");

list[0].addEventListener("click", function () {
    list[0].style.backgroundColor = "white";
    list[0].classList.remove("text-white");
    list[0].style.color = "black";
    for (let e = 0; e < img.length; e++) {
        img[e].classList.remove("d-none");
        img[e].classList.add("d-block");
    };
    for (let i = 0; i < list.length; i++) {
        if (i > 0) {
            list[i].style.backgroundColor = "initial";
            list[i].classList.add("text-white");
        };
    };
});

list[1].addEventListener("click", function () {
    list[1].style.backgroundColor = "white";
    list[1].classList.remove("text-white");
    list[1].style.color = "black";
    for (let e = 0; e < img.length; e++) {
        if (img[e].classList.contains("game")) {
            img[e].classList.remove("d-none");
            img[e].classList.add("d-block");
        } else {
            img[e].classList.remove("d-block");
            img[e].classList.add("d-none");
        };
    };
    for (let i = 0; i < list.length; i++) {
        if (i < 1 || i > 1) {
            list[i].style.backgroundColor = "initial";
            list[i].classList.add("text-white");
        };
    };
});

list[2].addEventListener("click", function () {
    list[2].style.backgroundColor = "white";
    list[2].classList.remove("text-white");
    list[2].style.color = "black";
    for (let e = 0; e < img.length; e++) {
        if (img[e].classList.contains("website")) {
            img[e].classList.remove("d-none");
            img[e].classList.add("d-block");
        } else {
            img[e].classList.remove("d-block");
            img[e].classList.add("d-none");
        };
    };
    for (let i = 0; i < list.length; i++) {
        if (i < 2 || i > 2) {
            list[i].style.backgroundColor = "initial";
            list[i].classList.add("text-white");
        };
    };
});

list[3].addEventListener("click", function () {
    list[3].style.backgroundColor = "white";
    list[3].classList.remove("text-white");
    list[3].style.color = "black";
    for (let e = 0; e < img.length; e++) {
        if (img[e].classList.contains("programs")) {
            img[e].classList.remove("d-none");
            img[e].classList.add("d-block");
        } else {
            img[e].classList.remove("d-block");
            img[e].classList.add("d-none");
        };
    };
    for (let i = 0; i < list.length; i++) {
        if (i < 3) {
            list[i].style.backgroundColor = "initial";
            list[i].classList.add("text-white");
        };
    };
});

/*....................................................
................... Span Compteur...................*/
const animationDuration = 2000;

const frameDuration = 1000 / 60;

const totalFrames = Math.round( animationDuration / frameDuration );

const easeOutQuad = t => t * ( 2 - t );

const animateCountUp = el => {
	let frame = 0;
	const countTo = parseInt( el.innerHTML, 10 );

	const counter = setInterval( () => {
		frame++;
		
		const progress = easeOutQuad( frame / totalFrames );
		
		const currentCount = Math.round( countTo * progress );

		if ( parseInt( el.innerHTML, 10 ) !== currentCount ) {
			el.innerHTML = currentCount;
		}

		if ( frame === totalFrames ) {
			clearInterval( counter );
		}
	}, frameDuration );
};

let span_compt = document.querySelectorAll(".span_compteur");

let runAnimations = () => {
	span_compt.forEach(element => {
        animateCountUp(element);
    });
};

let section_service = document.getElementById("section_service");

// window.addEventListener("scroll", function(e){
//     if(e.path[1].pageYOffset > 2180){
//         runAnimations();
//     };
// });

runAnimations();

/*....................................................
................Overlay Portfolio...................*/
let h3 = document.getElementsByClassName("h3_overlay");
for (let i = 0; i < h3.length; i++) {
    h3[i].style.display = "none";
};

let img_galerie = document.getElementsByClassName("img_galerie");

for (let i = 0; i < img_galerie.length; i++) {
    img_galerie[i].addEventListener("mouseover", function(){
        h3[i].style.display = "block";
    });
    img_galerie[i].addEventListener("mouseout", function(){
        h3[i].style.display = "none";
    });
};