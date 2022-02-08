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

console.log("Slide out nav");
const slideOutNav = document.querySelector('.dropdownMenu');
document.querySelector('.dropdownMenu').style.display = "none";
slideOutNav.classList.add('slideOutNav')

document.querySelector('.mobileNav').appendChild(slideOutNav);
document.querySelector('.slideOutNav').style.display = "block";

slideOutNav.style.height = "100vh";
slideOutNav.style.width = "100%";
slideOutNav.style.maxWidth = "500px";
slideOutNav.style.backgroundColor = "rgba(255, 255, 255)";
// slideOutNav.style.position = "fixed";
// slideOutNav.style.top = "0";
slideOutNav.style.right = "-500px";
slideOutNav.style.transition = "0.75s";

Object.assign(slideOutNav.style, {
    position: "fixed",
    top: "0"
})
// console.log(document.querySelector('.slideOutNav').style.position)


console.log(slideOutNav, "here");
console.log(slideOutNav.childNodes, "here");
console.log(slideOutNav.childNodes[2], "here");

slideOutNav.childNodes[1].style.textAlign = "center";




const buttonContainer = document.createElement('div')
buttonContainer.classList.add('buttonContainer')
buttonContainer.innerHTML = '<button> close </button>'

document.querySelector('.slideOutNav').prepend(buttonContainer)
document.querySelector('.buttonContainer').style.fontFamily = '"Lato", sans - serif;'
document.querySelector('.buttonContainer').style.fontWeight = "700";
document.querySelector('.buttonContainer').style.lineHeight = "1.45rem";
document.querySelector('.buttonContainer').style.textAlign = "right";
document.querySelector('.buttonContainer').style.color = "fff";

document.querySelector('.buttonContainer').children[0].style.backgroundColor = "rgba(255, 255, 255)";

console.log(document.querySelector("input[type=checkbox]:checked"))

document.querySelector("input[type = checkbox]").addEventListener('click', function() {
    console.log(document.querySelector("input[type=checkbox]"))
    console.log(document.querySelector("input[type=checkbox]").checked)
    console.log(document.querySelector("input[type=checkbox]:checked"))
    document.querySelector('.slideOutNav').style.right = "0"
})

document.querySelector('.buttonContainer').children[0].addEventListener('click', function() {
    document.querySelector("input[type=checkbox]").checked = "";
    document.querySelector('.slideOutNav').style.right = "-500px"
})

if (document.querySelector("input[type = checkbox]").checked == 'true') {
    document.querySelector('.slideOutNav').style.right = "0"
    console.log(document.querySelector('.slideOutNav').style.right)
}


const onPageLoad = function() {
    const welcome = document.createElement('div')
    Object.assign(welcome.style, {
        border: "5px solid #065635",
        backgroundColor: "#e0fddf",
        width: "80%",
        position: "fixed",
        top: "50vh",
        left: "50vw",
        transform: "translate(-50% , -50%)",
        textAlign: "center",
        padding: "200px 100px"
    })
    welcome.innerHTML = "<h2>Welcome to Sanctuary Helpers</h2><p>If you have any questions please use the contact page</p><p>Enjoy your time while browsing withus</p>";
    document.querySelector('main').append(welcome);
    document.querySelector('html').addEventListener('click', () => { welcome.style.display = "none"})
    setTimeout(() =>{welcome.style.display = "none"}, 5000);
}

onPageLoad();