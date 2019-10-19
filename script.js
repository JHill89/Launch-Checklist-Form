// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

window.addEventListener("load", function() {
   // console.log("Test");
   let form = document.querySelector("form");
   // variables
   let pilotNameInput = document.querySelector("input[name=pilotName]");
   let copilotNameInput = document.querySelector("input[name=copilotName]");
   let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
   let cargoWeightInput = document.querySelector("input[name=cargoWeight]");
   //helper functions
   function validate(){
      let valid = true;
      console.log(valid)
      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoWeightInput.value === "") {
         alert("All fields are required!");
         event.preventDefault();
         valid = false;
         console.log("#1: " + valid);
      } if (!isNaN(pilotNameInput.value)) {
         alert("Pilot name can only contain letters!");
         event.preventDefault();
         valid = false;
         console.log("#2: " + valid);
      } if (!isNaN(copilotNameInput.value)) {
         alert("Copilot name can only contain letters!")
         event.preventDefault();
         valid = false;
         console.log("#3: " + valid);
      } if (isNaN(fuelLevelInput.value)) {
         alert("Fuel Level can only contain numbers!")
         event.preventDefault();
         valid = false;
         console.log("#4: " + valid);
      } if (isNaN(cargoWeightInput.value)) {
         alert("Cargo Weight can only contain numbers!")
         event.preventDefault();
         valid = false;
         console.log("#5: " + valid);
      }
      return valid;
   }
   form.addEventListener("submit", function(event) {
      console.log("test123"); //it is hitting this line before validate function??
      //console prints "test123" then "true" when alerts are thrown. why???

      if (validate()){
         console.log('validate test');
         //if it returns true then change css element to true
         let faultyItems = document.querySelector("#faultyItems");
         faultyItems.visibility = "visible";
      }
      let pilotStatus = document.getElementById("pilotStatus").innerHTML = ` ${pilotNameInput} Ready`;
      let copilotStatus = document.getElementById("copilotStatus").innerHTML = `${copilotNameInput} Ready`;
   });
});
