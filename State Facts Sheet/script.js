let submitButton = document.getElementById("submitButton");
let inputState = document.getElementById("input").value;

submitButton.addEventListener("click", stateInfo);

function stateInfo(){
    document.querySelector("html").style.backgroundColor = "violet";
    if (inputState = "New York"){
      'use strict';
      document.getElementById("name").innerHTML = "New York";
      document.getElementById("admitted").innerHTML = "July 26, 1788";
      document.getElementById("capital").innerHTML = "Albany";
      document.getElementById("total-area").innerHTML = "54,556 square miles";
      document.getElementById("state-abbreviation").innerHTML = "NY";
      document.getElementById("name-origin").innerHTML = "17th Century Duke of York";
    } else if (inputState = "New Jersey"){
      document.querySelector("html").style.backgroundColor = "red";
      alert("Try Again!")
    }
};


      // } else if (inputState = "New Jersey"){
      //   statesName = "New Jersey";
      //   document.getElementById("name").innerHTML = "New Jersey";
      //   document.getElementById("admitted").innerHTML = "July 3" ;
      //   document.getElementById("capital").innerHTML = "bbb" ;
      //   document.getElementById("total-area").innerHTML = "vvv";
      //   document.getElementById("state-abbreviation").innerHTML = "bb" ;
      //   document.getElementById("name-origin").innerHTML = "sdfsdfsdfsdf";
      // } else if (inputState = "Pennsylvania" || (inputState = "pennsylvania")){
      //   document.getElementById("name").innerHTML = "Pennsylvania";
      //   document.getElementById("admitted").innerHTML = "July 4" ;
      //   document.getElementById("capital").innerHTML = "Albany" ;
      //   document.getElementById("total-area").innerHTML = "54,556 square miles";
      //   document.getElementById("state-abbreviation").innerHTML = "NY" ;
      //   document.getElementById("name-origin").innerHTML = "17th Century Duke of York";




// function setWeather() {
//   const choice = select.value;
//     if (choice === 'sunny') {
//       para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
//     } else if (choice === 'rainy') {
//       para.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';
//     } else if (choice === 'snowing') {
//       para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
//     } else if (choice === 'overcast') {
//       para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
//     } else {
//       para.textContent = '';
//     }
// }