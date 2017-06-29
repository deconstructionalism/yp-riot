// background image paths to be displayed
var backgrounds = [
    'images/giant-kitty-bg.jpg',
    'images/philly-skyline-bg.jpg',
    'images/philly-street-bg.jpg',
];

// preload background images
(function() {
    backgrounds.map(function(source) {
        var img = new Image();
        img.src = source;
    });
})();

// fade out loading overlay after resources are loaded and start cycling backgrounds
window.onload = function() {
    var dots = document.querySelectorAll('#loading-overlay span')
    for (var i = 0; i < dots.length; i++) {
        dots[i].classList.add('dots-fadeout')
    }
    // document.querySelectorAll('#loading-overlay span').forEach(function(dot) {
    //     dot.classList.add('dots-fadeout')
    // })
    setTimeout(function() {
        document.querySelector('#loading-overlay').classList.add('fadeout');
    }, 1200)
    cycleBgs();
};

// cycle background images
var cycleBgs = function() {

    var bodyEl = document.querySelector('body');
    var counter = 0;
    var numBgs = backgrounds.length;

    // set background image
    var setBg = function(bgSource) {
        bodyEl.style.backgroundImage = 'url(' + bgSource + ')';
    }

    // initialize background based on number of images
    switch (numBgs) {
        case 0:
            return;
        case 1:
            setBg(backgrounds[0]);
            return;
        default:
            setBg(backgrounds[0]);
            counter += 1;
    }

    // cycle through background images
    var bgCycler = setInterval(function() {
        counter = counter === numBgs ? 0 : counter;
        var bgImg = backgrounds[counter];
        setBg(bgImg);
        counter += 1;
    }, 3000);

    window.stopBgCycler = function() {
        clearInterval(bgCycler);
        bodyEl.style.backgroundImage = 'linear-gradient(-180deg, rgba(0, 0, 0, 0.13) 0%, rgba(0, 0, 0, 0.00) 100%)';
        document.querySelector('#bg-overlay').style.display = "none";
    }
}