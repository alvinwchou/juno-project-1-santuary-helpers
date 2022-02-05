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