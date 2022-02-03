/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const defaultTheme = () => {
   const body = document.querySelector('body')
   body.className = ""
};

const desertTheme = () => {
   const body = document.querySelector('body')
   body.className = "desert"
};

const oceanTheme = () => {
   const body = document.querySelector('body')
   body.className = "ocean"
};

const contrastTheme = () => {
   const body = document.querySelector('body')
   body.className = "high-contrast"
};

document.querySelector('#default').addEventListener('click', defaultTheme);

document.querySelector('#desert').addEventListener('click', desertTheme);

document.querySelector('#ocean').addEventListener('click', oceanTheme);

document.querySelector('#high-contrast').addEventListener('click', contrastTheme);
