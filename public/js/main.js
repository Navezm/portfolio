// Event Listener & animation Portfolio

let list = document.getElementsByClassName("list");
let img = document.getElementsByClassName("img_galerie");

$(document).ready(function () {

})

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

// Hover effect on images
for (let i = 0; i < img.length; i++) {
    img[e].addEventListener("mouseover", function () {

    });
};