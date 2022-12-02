//defining the costants by selecting them from the HTML
const colorButton1 = document.querySelector("#changer1");
const colorButton2 = document.querySelector("#changer2");
const colorButton3 = document.querySelector("#changer3");

const container1 = document.querySelector("#container1");
const container2 = document.querySelector("#container2");
const container3 = document.querySelector("#container3");

const h1_1 = document.querySelector("#h1_1");
const h2_1 = document.querySelector("#h2_1");
const span1 = document.querySelector("#span_1");
const span1Hex = document.querySelector("#span_1_hex");

const h1_2 = document.querySelector("#h1_2");
const h2_2 = document.querySelector("#h2_2");
const span2 = document.querySelector("#span_2");
const span2Hex = document.querySelector("#span_2_hex");

const h1_3 = document.querySelector("#h1_3");
const h2_3 = document.querySelector("#h2_3");
const span3 = document.querySelector("#span_3");
const span3Hex = document.querySelector("#span_3_hex");

window.onload = function () {
  document.getElementById("changer1").click();
  document.getElementById("changer2").click();
  document.getElementById("changer3").click();
};

let rgbToHex = function (rgb) {
  let hex = Number(rgb).toString(16);
  if (hex.length < 2) {
    hex = "0" + hex;
  }
  return hex;
};

//adding events to the click
colorButton1.addEventListener("click", function () {
  //generating the random rgb
  function makeRandomValues() {
    return {
      r: Math.floor(Math.random() * 255),
      g: Math.floor(Math.random() * 255),
      b: Math.floor(Math.random() * 255),
    };
  }
  let makeRandomColor = makeRandomValues();

  let newColor = `rgb(${makeRandomColor.r}, ${makeRandomColor.g}, ${makeRandomColor.b})`;

  let fullColorHex = function (r, g, b) {
    let red = rgbToHex(makeRandomColor.r);
    let green = rgbToHex(makeRandomColor.g);
    let blue = rgbToHex(makeRandomColor.b);
    return red + green + blue;
  };

  let newColorHex = `#${fullColorHex()}`;

  container1.style.backgroundColor = newColor;

  //extracting numbers from string
  const nums = /\d+/g;
  //using the numbers (now in array) and finding the total
  const rgbTotal = newColor.match(nums).reduce((total, colorNum) => {
    return parseInt(total) + parseInt(colorNum);
  });
  //changing the color of the text by comparing array total to threshold
  if (rgbTotal < 235) {
    h1_1.style.color = "white";
    h2_1.style.color = "white";
    span1.style.color = "white";
    span1Hex.style.color = "white";
  } else {
    h1_1.style.color = "black";
    h2_1.style.color = "black";
    span1.style.color = "black";
    span1Hex.style.color = "black";
  }
  //adding the rgb color string to the span
  span1.innerText = newColor;
  span1Hex.innerText = newColorHex;
});

//-------------------- Change Second Div------------------------//
//adding events to the click
colorButton2.addEventListener("click", function () {
  //generating the random rgb
  function makeRandomValues() {
    return {
      r: Math.floor(Math.random() * 255),
      g: Math.floor(Math.random() * 255),
      b: Math.floor(Math.random() * 255),
    };
  }
  let makeRandomColor = makeRandomValues();

  let newColor = `rgb(${makeRandomColor.r}, ${makeRandomColor.g}, ${makeRandomColor.b})`;

  let fullColorHex = function (r, g, b) {
    let red = rgbToHex(makeRandomColor.r);
    let green = rgbToHex(makeRandomColor.g);
    let blue = rgbToHex(makeRandomColor.b);
    return red + green + blue;
  };

  let newColorHex = `#${fullColorHex()}`;

  container2.style.backgroundColor = newColor;

  //extracting numbers from string
  const nums = /\d+/g;
  //using the numbers (now in array) and finding the total
  const rgbTotal = newColor.match(nums).reduce((total, colorNum) => {
    return parseInt(total) + parseInt(colorNum);
  });
  console.log(rgbTotal);
  //changing the color of the text by comparing array total to threshold
  if (rgbTotal < 235) {
    h1_2.style.color = "white";
    h2_2.style.color = "white";
    span2.style.color = "white";
    span2Hex.style.color = "white";
  } else {
    h1_2.style.color = "black";
    h2_2.style.color = "black";
    span2.style.color = "black";
    span2Hex.style.color = "black";
  }
  //adding the rgb color string to the span
  span2.innerText = newColor;
  span2Hex.innerText = newColorHex;
});

//-------------------- Change Third Div------------------------//
//adding events to the click
colorButton3.addEventListener("click", function () {
  //generating the random rgb
  function makeRandomValues() {
    return {
      r: Math.floor(Math.random() * 255),
      g: Math.floor(Math.random() * 255),
      b: Math.floor(Math.random() * 255),
    };
  }
  let makeRandomColor = makeRandomValues();

  let newColor = `rgb(${makeRandomColor.r}, ${makeRandomColor.g}, ${makeRandomColor.b})`;

  let fullColorHex = function (r, g, b) {
    let red = rgbToHex(makeRandomColor.r);
    let green = rgbToHex(makeRandomColor.g);
    let blue = rgbToHex(makeRandomColor.b);
    return red + green + blue;
  };

  let newColorHex = `#${fullColorHex()}`;

  container3.style.backgroundColor = newColor;
  console.log(newColor);
  //extracting numbers from string
  const nums = /\d+/g;
  //using the numbers (now in array) and finding the total
  const rgbTotal = newColor.match(nums).reduce((total, colorNum) => {
    return parseInt(total) + parseInt(colorNum);
  });
  console.log(rgbTotal);
  //changing the color of the text by comparing array total to threshold
  if (rgbTotal < 235) {
    h1_3.style.color = "white";
    h2_3.style.color = "white";
    span3.style.color = "white";
    span3Hex.style.color = "white";
  } else {
    h1_3.style.color = "black";
    h2_3.style.color = "black";
    span3.style.color = "black";
    span3Hex.style.color = "black";
  }
  //adding the rgb color string to the span
  span3.innerText = newColor;
  span3Hex.innerText = newColorHex;
});

