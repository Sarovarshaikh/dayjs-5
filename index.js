//Q-1 Create a button , on click of which new Heading tag h1 should be added with text as "MERN stack" on the screen above button

function textChange(){
    var text = document.getElementById("text")
    text.innerText = "MERN stack"
}

// function changeFlex(){
//     const flexDire = document.getElementsByClassName("card_main")[0]
//     // flexDire.style.flexDirection ="column"
//     flexDire.setAttribute("style", "flex-direction:column")
// }
//Q-2 Write code to get 1st H1 element from a webpage using DOM
var headingTag = document.getElementById("H1")
var headingTag = document.getElementsByClassName("H1")[0]
var headingTag = document.querySelectorAll(".H1")[0]
var headingTag = document.querySelector(".H1")

//Q-3 Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second

// let date = new Date(); 
// let hh = date.getHours();
// let mm = date.getMinutes();
// let ss = date.getSeconds();
// let session = "AM";
// var hr = document.getElementById("hr").innerHTML = hh;
// var min = document.getElementById("min").innerHTML = mm;
// var sec = document.getElementById("sec").innerHTML = ss

// let t = setTimeout(function(){ currentTime() }, 1000);
function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
    if(hh == 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " " + session;
  
    document.getElementById("clock").innerText = time; 
    let t = setTimeout(function(){ 
        currentTime() }, 1000);
  }
  currentTime();

//Q-4 Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"
//Q-5 Create an HTML page having content as Hello world and a button named "Hide Text." When user will click on this button hide the "Hello World" text
function hideText(){
    const textHide = document.getElementById("hello")
    textHide.setAttribute("style", "display:none");
}
function showText(){
    const textHide = document.getElementById("hello")
    textHide.setAttribute("style", "display:block");
}
//Q-6 Given an array of 0's and 1's find out number of 0's
const arr = [0,1,0,1,0,1,0,1,0,1,0,0];
let count = 0;
for(let i=0; i<arr.length; i++){
    if(arr[i] == 0){
        count++
    
    }

}
console.log(`number of zero in array is ${count}`);

//Q-7Given an array find out total no. of odd and even nos.
const oddEven = [1,2,8,4,6,5,7,9,1]
let countEven = 0;
let CountOdd = 0;
for(let i=0; i<oddEven.length; i++){
    if(oddEven[i]%2 === 0){
        countEven++;
    }else{
        CountOdd++;
    }

}
console.log(`Even no are ${countEven} and odd no are ${CountOdd}`);

//Q-8 Given a string find out number of vowels 
var nameStr = "sarovar";
let vowels = "AEIOU";
let conutVowels = 0;
for(let i in nameStr){
    for(let j in vowels){
        if(nameStr[i].toUpperCase === vowels[j]){
            conutVowels++
        }
    }

}
console.log(`The vowels in ${nameStr} is ${conutVowels}`);
//Q-9 Write a code to create two objects with 2 properties each, one will be string and other will be an array. Create a function to check if all the elements of the arrays in both the objects are same
