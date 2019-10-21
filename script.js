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
      
      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoWeightInput.value === "") {
         alert("All fields are required!");
         event.preventDefault();
         valid = false;
      } 
      
      if (!isNaN(pilotNameInput.value)) {
         alert("Pilot name can only contain letters!");
         event.preventDefault();
         valid = false;
         console.log("#2: " + valid);
      } 
      
      if (!isNaN(copilotNameInput.value)) {
         alert("Copilot name can only contain letters!")
         event.preventDefault();
         valid = false;
         console.log("#3: " + valid);
      } 
      
      if (isNaN(fuelLevelInput.value)) {
         alert("Fuel Level can only contain numbers!")
         event.preventDefault();
         valid = false;
         console.log("#4: " + valid);
      }
      
      if (isNaN(cargoWeightInput.value)) {
         alert("Cargo Weight can only contain numbers!")
         event.preventDefault();
         valid = false;
         console.log("#5: " + valid);
      }
      return valid;
   }


   form.addEventListener("submit", function(event) {
      let accessPilotStatus = document.getElementById("pilotStatus")
      accessPilotStatus.innerHTML = ` ${pilotNameInput.value} Ready`;

      let accesCopilotStatus = document.getElementById("copilotStatus")
      accesCopilotStatus.innerHTML =`${copilotNameInput.value} Ready`;
      // if (validate()){
      //    console.log('validate test');
      //    let faultyItems = document.querySelector("#faultyItems");
      //    faultyItems.style.visibility = "visible";
      //    event.preventDefault();
      // }

      if (fuelLevelInput.value < 10000) {
         let currentFuelStatus = document.getElementById("fuelStatus");
         currentFuelStatus.innerHTML = `Not enough fuel for the journey!`;
         let currentLaunchStatus = document.getElementById("launchStatus");
         currentLaunchStatus.innerHTML = `Shuttle not ready for launch`;
         document.querySelector("h2").style.color = "red";
         let faultyItems = document.querySelector("#faultyItems");
         faultyItems.style.visibility = "visible";
         event.preventDefault();
      } else if (cargoWeightInput.value > 10000) {
         let currentCargoStatus = document.getElementById("cargoStatus");
         currentCargoStatus.innerHTML = `There is too much mass for the shuttle to take off.`;
         let currentLaunchStatus = document.getElementById("launchStatus");
         currentLaunchStatus.innerHTML = `Shuttle not ready for launch`;
         document.querySelector("h2").style.color = "red";
         let faultyItems = document.querySelector("#faultyItems");
         faultyItems.style.visibility = "visible";
         event.preventDefault();
      } else {
         document.querySelector("h2").style.color = "green";
         let currentLaunchStatus = document.getElementById("launchStatus");
         currentLaunchStatus.innerHTML = "Shuttle is ready for launch"
         event.preventDefault();
      }
      
   });
});
