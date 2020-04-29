//current image number variable
let imgNumber = document.getElementById("img-number");

//total images variable
let totalImages = document.getElementById("img-total");

//initialize slideIndex variable
let slideIndex = 0;

//array of images variable 
let imgArr = document.getElementsByClassName("img-slides");

//set image total number to length of arr.
totalImages.innerHTML = imgArr.length;

//show the first image as default
showSlide(0);

//on click, the below function will run
function changeIndex(number) {
    slideIndex += number;

    //if inputted index is greater than max index in array, reset to first image
    if (slideIndex > imgArr.length-1) {
        slideIndex = 0;
    }

    //if inputted index is less than first index in array, then reset to last image
    if (slideIndex < 0) {
        slideIndex = imgArr.length-1;
    }

    //update image number
    imgNumber.innerHTML = slideIndex+1;

    //shows the slide of the current index
    showSlide(slideIndex);
}

function showSlide(n) {
    //iterate through image array, make all images not display
    for (let i=0; i<imgArr.length; i++) {
        imgArr[i].style.display = "none";
    }

    //display the image at slideIndex
    imgArr[n].style.display = "block";
}



