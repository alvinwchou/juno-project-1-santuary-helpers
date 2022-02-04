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

const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputText = document.querySelector("input[type=text]");
    const inputEmail = document.querySelector("input[type=email]");
    const inputMessage = document.querySelector("textarea");
    console.log(inputText.value, inputEmail.value, inputMessage.value);

    if (inputText.value && inputEmail.value && inputMessage.value){
        console.log(`complete`);
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
// console.log(form);
// const inputText = document.querySelector("input[id=name]");
// console.log(inputText, inputText.value);


// const inputMessage = document.querySelector("textarea");
// console.log(inputMessage.id)

