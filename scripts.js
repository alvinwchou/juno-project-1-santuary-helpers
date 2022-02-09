// document.querySelector();
// document.querySelectorAll();
// document.getElementById();
// document.getElementsByClassName();

// document.createElement();
// .innerHTML;
// .textContent;
// .appenChild();

// const heading3 = document.querySelector('h3');
// heading3.innerHTML = "JS <strong>fun</strong>";

const footer = document.querySelector('footer');
footer.children[0].textContent = "My first JS edit";

const header3 = document.querySelector('h3');
header3.textContent = "LOGO";
// console.log(header3);
header3.style.fontSize = "3rem";


const aElement = document.querySelectorAll('a');
// console.log(aElement[9].attributes.href.nodeValue);
for (let i = 0; i < aElement.length; i++) {
    if (aElement[i].attributes.href.nodeValue == "#") {
        // console.log(`This one has #`);
        aElement[i].attributes.href.nodeValue = "https://sd.keepcalms.com/i-w600/keep-calm-its-not-finished-yet.jpg";
        // console.log(aElement[i].attributes.href.nodeValue);
    } 
    // else {console.log(`Position ${i} does not have #`)}
}

// console.log(form);
// const inputText = document.querySelector("input[id=name]");
// console.log(inputText, inputText.value);


// const inputMessage = document.querySelector("textarea");
// console.log(inputMessage.id)
if (document.querySelector('form')) {
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputText = document.querySelector("input[type=text]");
    const inputEmail = document.querySelector("input[type=email]");
    const inputMessage = document.querySelector("textarea");
    // console.log(inputText.value, inputEmail.value, inputMessage.value);

    if (inputText.value && inputEmail.value && inputMessage.value){
        // console.log(`complete`);
        addComment(inputText.value, inputMessage.value)
        alert('You have successfully submitted!')
        inputText.value = "";
        inputEmail.value = "";
        inputMessage.value = "";
    } else if (inputText.value == "") {
        alert('Missing name');
    } else if (inputEmail.value == "") {
        alert('Missing email');
    } else if (inputMessage.value == "") {
        if (inputMessage.id == "message") {
            alert('Missing message');
        } else {
            alert('Missing comment')
        }
    }
})






// create a var
// create Element
// add text to Element
// append element t var

// const commentsSection = document.getElementById("comments");
// const commentsWrapper = document.getElementsByClassName("wrapper")
// console.log(commentsSection, commentsSection.children, commentsWrapper);
// // commentsSection.children.appendChild('testing')
// const commentsSectionWrapper = commentsSection.children;
// console.log(commentsSectionWrapper);
// // commentsSectionWrapper.appendChild("testinggg")
// const newComment = document.createElement('p')
// newComment.textContent = "testingggg"
// // commentsSection.children.appendChild(newComment)
// commentsSectionWrapper[0].appendChild(newComment);

const commentsSection = document.getElementById("comments");
const commentsSectionWrapper = commentsSection.children;

// create div Element
// add classes commentsContainer flexContainer
// create and append child div
//     add class imgContainer
//     create and append child img
//         add src

// create and append child div
//     add class textContainer
//     create and append p
//         add date and name
//     create and append p
//         add comment

function addComment(name, comment) {
    const newCommentContainer = document.createElement('div');
    newCommentContainer.classList.add('commentsContainer', 'flexContainer');
    // console.log(newCommentContainer.classList);
    const newCommentImgContainer = document.createElement('div');
    newCommentImgContainer.classList.add('imgContainer');

    const newCommentImg = document.createElement('img')
    // console.log(newCommentImg);
    newCommentImg.src = 'https://cdn.pixabay.com/photo/2019/09/14/09/44/cat-4475583_960_720.png';

    newCommentImgContainer.appendChild(newCommentImg);
    newCommentContainer.appendChild(newCommentImgContainer);


    const newCommentTextContainer = document.createElement('div');
    newCommentTextContainer.classList.add('textContainer')

    // const newCommentParagraph = document.createElement('p');
    // newCommentParagraph.textContent = "Time stamp, Name";

    // newCommentTextContainer.appendChild(newCommentParagraph);

    // newCommentParagraph.textContent = "Comment"; 

    // newCommentTextContainer.appendChild(newCommentParagraph);

    const newCommentHead = document.createElement('p');
    newCommentHead.textContent = `${timestamp()}, by ${name}`;

    const newCommentParagraph = document.createElement('p');
    newCommentParagraph.textContent = `${comment}`; 

    // newCommentHead.appendChild(newCommentParagraph);
    // console.log(newCommentHead);

    newCommentTextContainer.appendChild(newCommentHead);
    newCommentTextContainer.appendChild(newCommentParagraph);

    newCommentContainer.appendChild(newCommentTextContainer);

    commentsSectionWrapper[0].appendChild(newCommentContainer);
};

// const today= new Date();
// const timestamp = `${today.getDay()} ${today.getMonth()+1} ${today.getDate()} ${today.getFullYear()}, `
// console.log(timestamp);


function timestamp() {
    const today = new Date();
    const daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const monthsOfTheYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const ordinal = () => {
        let day = today.getDate();
        if (day == "1" || day == "21" || day == "31") {
            return "st";
        } else if (day == "2" || day == "22" ) {
            return "nd";
        } else if (day == "3" || day == "22" ) {
            return "rd";
        } else {
            return "th";
        };
    };
    return `${daysOfTheWeek[today.getDay()]} ${monthsOfTheYear[today.getMonth()]} ${today.getDate()}${ordinal()}, ${today.getFullYear()} `;
}

// console.log(timestamp());


const button = document.querySelector(".button");

form.addEventListener('submit', function() {
    button.style.background = "limegreen";
})
}

if (!document.querySelector('.blogMain') && !document.querySelector('.contactMain')) {
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
}

// console.log("Slide out nav");
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


// console.log(slideOutNav, "here");
// console.log(slideOutNav.childNodes, "here");
// console.log(slideOutNav.childNodes[2], "here");

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

// console.log(document.querySelector("input[type=checkbox]:checked"))

document.querySelector("input[type = checkbox]").addEventListener('click', function() {
    // console.log(document.querySelector("input[type=checkbox]"))
    // console.log(document.querySelector("input[type=checkbox]").checked)
    // console.log(document.querySelector("input[type=checkbox]:checked"))
    document.querySelector('.slideOutNav').style.right = "0"
})

document.querySelector('.buttonContainer').children[0].addEventListener('click', function() {
    document.querySelector("input[type=checkbox]").checked = "";
    document.querySelector('.slideOutNav').style.right = "-500px"
})

if (document.querySelector("input[type = checkbox]").checked == 'true') {
    document.querySelector('.slideOutNav').style.right = "0"
    // console.log(document.querySelector('.slideOutNav').style.right)
}

// next
if (!document.querySelector('.blogMain') && !document.querySelector('.contactMain')) {


const moreSection = document.querySelector('.more');
const moreSectionWrapper = moreSection.children;
// console.log(moreSectionWrapper[0])
const moreContainer = moreSectionWrapper[0].children;
// console.log(moreContainer[0]);


const moreHeader = moreSection.querySelectorAll('h2');
// console.log(moreHeader)

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

// console.log(moreContainer[3]);



const gallerySection = document.querySelector('.gallery')
// console.log("Gallery Section Start");
// console.log(gallerySection);

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
// console.log(galleryImgContainer);

galleryImgContainer[0].style.order = "1";
galleryImgContainer[1].style.order = "2";
galleryImgContainer[2].style.order = "3";
focus();

let numberOfClicks = 0;

next.addEventListener('click', function() {
    // console.log('next')
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
    // console.log('previous')
    // console.log(numberOfClicks);
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

    
}