const gallerySection = document.getElementById("gallery");
console.log(gallerySection);
// const galleryTitle = 
// gallerySection.appendChild(`<h4>Gallery</h4>`)

console.log(gallerySection.children);
const gallerySectionWrapper = gallerySection.children;
console.log(gallerySectionWrapper[0]);
const galleryImg = gallerySectionWrapper[0].getElementsByClassName("imgContainer")
console.log(galleryImg);
console.log(galleryImg[0]);
galleryImg[0].addEventListener('mouseover', function() {
    galleryImg[0].style.opacity = "0";
});
galleryImg[1].addEventListener('mouseover', function() {
    galleryImg[1].style.animation = "jump 1s linear infinite";
});



// const gallerySectionClone = document.querySelector(".gallery");
// console.log(gallerySectionClone);
// document.addEventListener('click', function() {
//     document.body.appendChild(gallerySection)
// })