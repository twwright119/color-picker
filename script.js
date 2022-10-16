
//defining the costants by selecting them from the HTML
const colorButton = document.querySelector('#changer');
const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')
const span = document.querySelector('span')

//generating the random rgb
function makeRandomColor() {
    const r = (Math.floor(Math.random() * 255));
    const g = (Math.floor(Math.random() * 255));
    const b = (Math.floor(Math.random() * 255));
    return `rgb(${r},${g},${b})`;
}
console.log(makeRandomColor());
//adding events to the click
colorButton.addEventListener('click', function () {
    const newColor = makeRandomColor();
    document.body.style.backgroundColor = newColor;
    console.log(newColor);
    //extracting numbers from string
    const nums = /\d+/g;
    console.log(nums);
    //using the numbers (now in array) and finding the total
    const rgbTotal = newColor.match(nums).reduce((total, colorNum) => {
        return parseInt(total) + parseInt(colorNum)
    }
    );
    console.log(rgbTotal);
    //changing the color of the text by comparing array total to threshold
    if (rgbTotal < 255) {
        h1.style.color = 'white'
        h2.style.color = 'white'
        colorButton.style.color = 'white'
        colorButton.style.borderColor = 'white'
    }
    else {
        h1.style.color = 'black'
        h2.style.color = 'black'
        colorButton.style.color = 'black'
        colorButton.style.borderColor = 'black'
    };
    //adding the rgb color string to the span
    span.innerText = newColor;
});



