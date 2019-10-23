// Write your JavaScript code here!
function init(){
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(json){
         // console.log(json[0]);
         const div = document.getElementById("missionTarget");

         div.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[0].name}</li>
            <li>Diameter: ${json[0].diameter}</li>
            <li>Star: ${json[0].star}</li>
            <li>Distance from Earth: ${json[0].distance}</li>
            <li>Number of Moons: ${json[0].moons}</li>
         </ol>
         <img src="${"https://www.nasa.gov/sites/default/files/images/587837main_Kepler16_transit_art2_full.jpg"}">`
      });
   });
}

window.onload = init;

  /* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
  <img src="${}"></img>  */

window.addEventListener("load", function() {
   console.log("Test");
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
      accessPilotStatus.innerHTML = ` Pilot ${pilotNameInput.value} Ready`;
      let accesCopilotStatus = document.getElementById("copilotStatus")
      accesCopilotStatus.innerHTML =`Co-pilot ${copilotNameInput.value} Ready`;

      //variables:
      let currentFuelStatus = document.getElementById("fuelStatus");
      let currentLaunchStatus = document.getElementById("launchStatus");
      let faultyItems = document.querySelector("#faultyItems");
      let currentCargoStatus = document.getElementById("cargoStatus");

      // if (validate()){
      //    console.log('validate test');
      //    let faultyItems = document.querySelector("#faultyItems");
      //    faultyItems.style.visibility = "visible";
      //    event.preventDefault();
      // }

      if (fuelLevelInput.value < 10000) {
         currentFuelStatus.innerHTML = `Not enough fuel for the journey!`;
         currentLaunchStatus.innerHTML = `Shuttle not ready for launch`;
         currentLaunchStatus.style.color = "red";
         faultyItems.style.visibility = "visible";
         event.preventDefault();

      } else if (cargoWeightInput.value > 10000) {
         currentCargoStatus.innerHTML = `There is too much mass for the shuttle to take off.`;
         currentLaunchStatus.innerHTML = `Shuttle not ready for launch`;
         document.querySelector("h2").style.color = "red";
         faultyItems.style.visibility = "visible";
         event.preventDefault();

      } else {
         document.querySelector("h2").style.color = "green";
         currentLaunchStatus.innerHTML = "Shuttle is ready for launch"
         event.preventDefault();
      }
      
   });
});
