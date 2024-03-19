import Reveal from 'reveal.js';
$(function() {
    Reveal.initialize({
        controls: true,
        progress: false,
        center: true,
        hash: false,
        width: "100%",
        height: "100%",
        margin: 0,
        minScale: 1,
        maxScale: 1,
        overview: false,
        keyboard: false,

    }).then( () => {
        let slide = Reveal.getCurrentSlide();
    });
});