/*******************
 * OUR HELPER CODE *
 *******************/

/*
 * Here we add the squares to the canvas dynamically.
 * You can mostly leave this section alone!
 * But if you want to change how wide the canvas is,
 * there are just two steps:
 *
 * 1. Change the `gridWidth` value below.
 * 2. Change the `grid-template-rows` and
 * `grid-template-columns` to match.
 *
 * To make the second one happen, the number to change
 * is the first argument to `repeat`, currently set at 10.
 */
const gridWidth = 10;
let count = 0;
while (count <= gridWidth * gridWidth) {
  const canvas = document.querySelector(".canvas");
  const div = document.createElement("div");
  div.className = "square color-5";
  canvas.appendChild(div);
  count++;
}

// You probably should NOT do these in the order below.
// That is, you probably should NOT do all the queries,
// THEN all the functions,
// THEN all the wiring.

// Instead, it'll be easier if you go one action at a time!
// So, add a query for the palette colors.
// THEN add an event listener function for what happens when one is clicked.
// THEN wire those two together, so that when the palette elements are clicked,
// the function runs.
//
// And proceed from there to getting the squares working.
//

// ALSO.
// You do not have to follow the sections below. If you're doing your functions inline, it doesn't make a lot of sense to separate the event listener functions from their wiring!

/***********
 * QUERIES *
 ***********/
changeColor(color1);
let colors = document.querySelectorAll(".palette-color color-1");

let color1 = document.querySelector("#color-1");
let color2 = document.querySelector("#color-2");
let color3 = document.querySelector("#color-3");
let color4 = document.querySelector("#color-4");
let color5 = document.querySelector("#color-5");

let brush = document.querySelector(".brush-selection");

let palette = document.querySelector(".palette");

let canvas = document.querySelector(".canvas");

//applying the the action to the individual name/ item
// Add queries for all your squares, palette colors, and brush here.
// (Note the singular or plural used in that sentence!)

changeColor1(color1);
changeColor2(color2);
changeColor3(color3);
changeColor4(color4);
changeColor5(color5);

function changeColor1(element) {
  element.style.backgroundColor = "white";
}
function changeColor2(element) {
  element.style.backgroundColor = "blue";
}
function changeColor3(element) {
  element.style.backgroundColor = "green";
}
function changeColor4(element) {
  element.style.backgroundColor = "pink";
}
function changeColor5(element) {
  element.style.backgroundColor = "purple";
}

/****************************
 * EVENT LISTENER FUNCTIONS *
 ****************************/

colors.addEventListener("click", (e) => {
  console.log(e.target);
});

color1.addEventListener("click", (e) => {
  console.log(e.target);
});
color2.addEventListener("click", (e) => {
  console.log(e.target);
});
color3.addEventListener("click", (e) => {
  console.log(e.target);
});
color4.addEventListener("click", (e) => {
  console.log(e.target);
});
color5.addEventListener("click", (e) => {
  console.log(e.target);
});

// Now add some functions to handle clicking one particular square
// and clicking one particular palette color. You can leave them
// empty at first, though a console.log just to know they're being
// run as event listeners (after the next step is set up) isn't a
// bad idea for testing purposes.

/**************************
 * WIRING IT ALL TOGETHER *
 **************************/

// Now: wiring up our event listeners to our html node elements.
// You'll need to add the appropriate event listener for each
// square and for each palette color from the functions you
// wrote above.

//this is applying the event listener to the parent ordered list,
// the desribed action is being performed on all the children
// indiviually however the action is the same for all.
// //bubbling
// let list1 = document.querySelector("ol");

// //applyinth the action to the individual name/ item
// list1.addEventListener("click", function (event) {
//   event.target.style.textDecoration = "line-through";
// });

// let list2 = document.querySelector("ul");

// list2.addEventListener("click", function (event) {
//   event.target.style.opacity = 0;
// });

// let dino1 = document.querySelector("row");

// dino1.addEventListener("click", function (event) {
//   event.target.style.opacity = 0;
// });

// // class is .
// // # id
// //id="row"

// // evvent.target

// //
