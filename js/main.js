/*----- constants -----*/
//Object that stores set of images
const images = {
    set1: {
        'img1': '',
        'img2': '',
        'img3': ''
    },
    set2: {
        'img1': '',
        'img2': '',
        'img3': ''
    },
    set3: {
        'img1': '',
        'img2': '',
        'img3': ''
    },
    set4: {
        'img1': '',
        'img2': '',
        'img3': ''
    },
    set5: {
        'img1': '',
        'img2': '',
        'img3': ''
    },
    set6: {
        'img1': '',
        'img2': '',
        'img3': ''
    },
    set7: {
        'img1': '',
        'img2': '',
        'img3': ''
    },
    set9: {
        'img1': '',
        'img2': '',
        'img3': ''
    },
    set10: {
        'img1': '',
        'img2': '',
        'img3': ''
    },
}



/*----- app's state (variables) -----*/

let score, imageSet, answer;

/*----- cached element references -----*/

/*----- event listeners -----*/

/*----- functions -----*/
init();

// Initializes the variables 
function init() {
    score = 0;

    imageSet = image.set1;

    answer = [];
}