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

const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputText = document.querySelector("input[type=text]");
    const inputEmail = document.querySelector("input[type=email]");
    const inputMessage = document.querySelector("textarea");
    console.log(inputText.value, inputEmail.value, inputMessage.value);

    if (inputText.value && inputEmail.value && inputMessage.value){
        console.log(`complete`);
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

console.log(timestamp());




