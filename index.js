function init_fade() {
    let elementsArray = document.querySelectorAll(".fadein");
    window.addEventListener('scroll', fadeIn );
    
    function fadeIn() {
        for (var i = 0; i < elementsArray.length; i++) {
            var elem = elementsArray[i]
            var distInView = elem.getBoundingClientRect().top - window.innerHeight;
            if (distInView < 0) {
                elem.classList.add("fadedin");
            } else {
                elem.classList.remove("fadedin");
            }
        }
    }
    fadeIn();
}