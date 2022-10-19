# My Color Picker Project </br>
<p>This is my coding project that I made while enrolled in a Udemy course by Colt Steele. It was a fun challenge, and was my first real brush with Javascript, in a way that I actually had to use critical thinking in order to accomplish the goal.</p></br>
<p>If you would like to check out the Web Developer Bootcamp by Colt Steele, follow this [Udemy Link](https://www.udemy.com/course/the-web-developer-bootcamp/)</p></br></br>

## The Chalenges I face with this project </br>
<p> The project contained simple functions involving Math.floor, and Math.random, to obtain numbers that were later used as the inputs for the rgb values. I also utiliezed some basic if-else functions and event listeners. These were the easy parts. The hardest part was when I tried to change the text color based off of the math functions I passed through.</p></br>
<p>In order to change the color of the text based off of the darkness of the color picker, I had to first understand how my function passed the values through as. Meaning were they in an array? object? string? integer? Well I found out that it was an object with number strings. Once I understood this, I was able to pass through another function which converted the object to an array, and parseInt those items. Then I was able to loop over the array to find the total. The total was then compared the a hardcoded value which was used as the parameter for my if-else statement</p></br>
<p>Once I understood that how a function was returning information to me, I was able to adjust accordingly</p></br>
