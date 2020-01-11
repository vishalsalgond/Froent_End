function scroll() {
    var intro = document.querySelector(".in");
    var introPos = intro.getBoundingClientRect().top;
    var screenPos = window.innerHeight/1.3;

    if(introPos < screenPos){
        intro.classlist.add('.out');
    }

}

window.addEventListener('scroll',scroll);
