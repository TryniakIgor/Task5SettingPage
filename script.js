const backgroundColor = document.querySelector('#backgroundColor');
const fontFamilySelect = document.querySelector('#fontFamily');
const h1Leveling = document.querySelector('#h1Leveling');

const listMarkerType = document.querySelector('#listMarkerType');
const linkBackgroundColor = document.querySelector('#linkBackgroundColor');
const linkText = document.querySelector('#linkTextColor');
const linkBackground = document.querySelector('#everyLinkBackgroundColor');

const h1 = document.querySelector('h1');
const linkParagraph = document.querySelector('p');
const links = document.querySelectorAll('a')
const listElements = document.querySelectorAll('li');

const divBackground = document.getElementById('divColor');
const divFontSize = document.getElementById('divFontSize');
const divFontWeight = document.getElementById('divFontWeight');
const myDiv = document.querySelector('div');

const inputLink = document.querySelectorAll('.inputLink');
const link = document.querySelectorAll('.link');




backgroundColor.addEventListener('input', () => {
    document.body.style.backgroundColor = backgroundColor.value;
});

fontFamilySelect.addEventListener('change', () => {
    document.body.style.fontFamily = fontFamilySelect.value;
});

h1Leveling.addEventListener('input', (event) => {
    h1.style.textAlign = event.target.value;;

});

listMarkerType.addEventListener('change', (event) => {
    listElements.forEach((listElement) => {
        listElement.style.listStyleType = event.target.value;

    });
});

linkBackgroundColor.addEventListener('input', (event) => {
    linkParagraph.style.backgroundColor = event.target.value;

});

linkText.addEventListener('input', (event) => {
    for (const link of links) {
        link.style.color = event.target.value;
    }
});

linkBackground.addEventListener('input', (event) => {
    for (const link of links) {
        link.style.backgroundColor = event.target.value;
        console.log(link.style.color);
    }
});

divBackground.addEventListener('input', () => {
    myDiv.style.color = divBackground.value;
});

divFontSize.addEventListener('input', () => {
    myDiv.style.fontSize = `${divFontSize.value}px`;
});

divFontWeight.addEventListener('change', () => {
    myDiv.style.fontWeight = divFontWeight.value;
});

for (let i = 0; i < inputLink.length; i++) {
    inputLink[i].addEventListener("change", (e) => {
        link[i].innerHTML = e.target.value;
        link[i].href = "http://" + e.target.value;
        console.log(e.target.value);
    });
}

