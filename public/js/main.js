let list = document.getElementsByClassName("list");
let img = document.getElementsByClassName("img_galerie");

for (let i = 0; i < list.length; i++) {
    list[i].addEventListener("click", function(){
        if(i == 0){
            list[i].style.backgroundColor = "white";
            list[i].classList.remove("text-white");
            list[i].style.color = "black";
            for (let e = 0; e < img.length; e++) {
                img[e].classList.remove("d-none");
                img[e].classList.add("d-block");
            };
        } else if(i == 1){
            list[i].style.backgroundColor = "white";
            list[i].classList.remove("text-white");
            list[i].style.color = "black";
            for (let e = 0; e < img.length; e++) {
                if(img[e].classList.contains("game")){
                    img[e].classList.remove("d-none");
                    img[e].classList.add("d-block");
                } else {
                    img[e].classList.remove("d-block");
                    img[e].classList.add("d-none");
                };
            };
        } else if(i == 2){
            list[i].style.backgroundColor = "white";
            list[i].classList.remove("text-white");
            list[i].style.color = "black";
            for (let e = 0; e < img.length; e++) {
                if(img[e].classList.contains("website")){
                    img[e].classList.remove("d-none");
                    img[e].classList.add("d-block");
                } else {
                    img[e].classList.remove("d-block");
                    img[e].classList.add("d-none");
                };
            };
        } else if(i == 3){
            list[i].style.backgroundColor = "white";
            list[i].classList.remove("text-white");
            list[i].style.color = "black";
            for (let e = 0; e < img.length; e++) {
                if(img[e].classList.contains("programs")){
                    img[e].classList.remove("d-none");
                    img[e].classList.add("d-block");
                } else {
                    img[e].classList.remove("d-block");
                    img[e].classList.add("d-none");
                };
            };
        };
    });
};