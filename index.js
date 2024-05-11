function mobile_scroll() {
    let mobile_cards = document.querySelectorAll("section.projects .cards .card");
    if (
        !window.matchMedia("(max-aspect-ratio: 5/4)").matches ||
        !window.matchMedia("(hover: none)").matches
    ) return

    var FADE_START = 0.3;
    var FADE_TILL = 0.6;
    var KEEP_TILL = 0.8;

    var MIN_IMG_OPACITY = 0.2;

    // mobile with no hover
    for (let i=0; i<mobile_cards.length; i++) {
        let card = mobile_cards[i];
        let viewdist = -(card.getBoundingClientRect().top - window.innerHeight + 20);
        let viewratio = viewdist/window.innerHeight;

        if (viewratio < 0 || viewratio > 1)
            continue;

        let cardimg = card.children[0];
        let cardtext = card.children[1];

        if (viewratio < FADE_START){    // no text
            cardimg.style.opacity = 1;
            cardtext.style.opacity = 0;

        } else if (viewratio < FADE_TILL) { // fade into text
            cardimg.style.opacity = 1 - (1 - MIN_IMG_OPACITY)*(viewratio - FADE_START)/FADE_START;
            cardtext.style.opacity = (viewratio - FADE_START)/FADE_START;

        } else if (viewratio < KEEP_TILL) { // keep
            cardimg.style.opacity = MIN_IMG_OPACITY;
            cardtext.style.opacity = 1;

        } else {    // fade back to no text
            cardimg.style.opacity = MIN_IMG_OPACITY + (1 - MIN_IMG_OPACITY)*(viewratio - KEEP_TILL)/(1 - KEEP_TILL);
            cardtext.style.opacity = 1 - (viewratio - KEEP_TILL)/(1 - KEEP_TILL);
        };
    }
}

window.addEventListener("scroll", mobile_scroll)