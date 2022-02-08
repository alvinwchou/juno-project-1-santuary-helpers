// const gallerySection = document.getElementById("gallery");
// console.log(gallerySection);
// // const galleryTitle = 
// // gallerySection.appendChild(`<h4>Gallery</h4>`)

// console.log(gallerySection.children);
// const gallerySectionWrapper = gallerySection.children;
// console.log(gallerySectionWrapper[0]);
// const galleryImg = gallerySectionWrapper[0].getElementsByClassName("imgContainer")
// console.log(galleryImg);
// console.log(galleryImg[0]);
// galleryImg[0].lastElementChild.addEventListener('mouseover', function() {
//     galleryImg[0].style.opacity = "0";
// });
// galleryImg[1].lastElementChild.addEventListener('mouseover', function() {
//     galleryImg[1].style.animation = "jump 1s linear infinite";
// });
// galleryImg[2].lastElementChild.addEventListener('mouseout', function() {
//     galleryImg[0].style.opacity = "1";
//     galleryImg[1].style.animation = "";
// });


const moreSection = document.querySelector('.more');
const moreSectionWrapper = moreSection.children;
console.log(moreSectionWrapper[0])
const moreContainer = moreSectionWrapper[0].children;
console.log(moreContainer[0]);


const moreHeader = moreSection.querySelectorAll('h2');
console.log(moreHeader)

moreHeader[0].addEventListener('mouseover', function () {
    moreContainer[0].style.opacity = "0";
});
moreHeader[1].addEventListener('mouseover', function () {
    moreContainer[1].style.animation = "jump 1s linear infinite";
});
moreContainer[3].lastElementChild.children[1].addEventListener('mouseout', function () {
    moreContainer[0].style.opacity = "1";
    moreContainer[1].style.animation = "";
});
document.addEventListener('scroll', function () {
    moreContainer[2].style.background = randomColor();
});

function randomColor() {
    let a = Math.floor(Math.random() * 256) ;
    let b = Math.floor(Math.random() * 256) ;
    let g = Math.floor(Math.random() * 256) ;
    return `rgb(${a}, ${b}, ${g})`;
}

console.log(moreContainer[3]);



const gallerySection = document.querySelector('.gallery')
console.log("Gallery Section Start");
console.log(gallerySection);

const arrows = document.createElement('div')
arrows.classList.add('flexContainer')
arrows.style.justifyContent = "space-evenly"

const previous = document.createElement('p')
previous.textContent = "previous"
arrows.appendChild(previous);
const next = document.createElement('p')
next.textContent = "next"
arrows.appendChild(next);
gallerySection.appendChild(arrows)

const galleryImgContainer = gallerySection.querySelectorAll('.imgContainer')
console.log(galleryImgContainer);

galleryImgContainer[0].style.order = "1";
galleryImgContainer[1].style.order = "2";
galleryImgContainer[2].style.order = "3";
focus();

let numberOfClicks = 0;

next.addEventListener('click', function() {
    console.log('next')
    numberOfClicks++;
    if (numberOfClicks % 3 == 0) {
        galleryImgContainer[0].style.order = "1";
        galleryImgContainer[1].style.order = "2";
        galleryImgContainer[2].style.order = "3";
    } else if (numberOfClicks % 3 == 1) {
        galleryImgContainer[0].style.order = "3";
        galleryImgContainer[1].style.order = "1";
        galleryImgContainer[2].style.order = "2";
    } else if (numberOfClicks % 3 == 2) {
        galleryImgContainer[0].style.order = "2";
        galleryImgContainer[1].style.order = "3";
        galleryImgContainer[2].style.order = "1";
    };
    focus();
});

previous.addEventListener('click', function () {
    console.log('previous')
    console.log(numberOfClicks);
    if (numberOfClicks == 0) {
        numberOfClicks = 3;
    }
    numberOfClicks--;
    if (numberOfClicks % 3 == 0) {
        galleryImgContainer[0].style.order = "1";
        galleryImgContainer[1].style.order = "2";
        galleryImgContainer[2].style.order = "3";
    } else if (numberOfClicks % 3 == 1) {
        galleryImgContainer[0].style.order = "3";
        galleryImgContainer[1].style.order = "1";
        galleryImgContainer[2].style.order = "2";
    } else if (numberOfClicks % 3 == 2) {
        galleryImgContainer[0].style.order = "2";
        galleryImgContainer[1].style.order = "3";
        galleryImgContainer[2].style.order = "1";
    };
    focus();
});

function focus() {
    if (galleryImgContainer[1].style.order == 2) {
        galleryImgContainer[1].style.opacity = "1";
        galleryImgContainer[0].style.opacity = "0.2";
        galleryImgContainer[2].style.opacity = "0.2";
    } else if (galleryImgContainer[2].style.order == 2) {
        galleryImgContainer[2].style.opacity = "1";
        galleryImgContainer[1].style.opacity = "0.2";
        galleryImgContainer[0].style.opacity = "0.2";
    } else if (galleryImgContainer[0].style.order == 2) {
        galleryImgContainer[0].style.opacity = "1";
        galleryImgContainer[1].style.opacity = "0.2";
        galleryImgContainer[2].style.opacity = "0.2";
    }
}

