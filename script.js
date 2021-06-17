// Write your JavaScript code here!

window.addEventListener("load", function() {

   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {

               response.json().then( function(json) {

                  const div = document.getElementById("missionTarget");  
                  let index = Math.floor(Math.random()*json.length);

         
                  document.getElementById("missionTarget").innerHTML = `
                     <h2>Mission Destination</h2>
                     <ol>
                      <li>Name: ${json[index].name}</li>
                      <li>Diameter: ${json[index].diameter}</li>
                      <li>Star: ${json[index].star}</li>
                      <li>Distance from Earth: ${json[index].distance}</li>
                      <li>Number of Moons: ${json[index].moons}</li>
                     </ol>
                     <img src="${json[index].image}">
                  `
               });
     
            });
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
     // alert("submit clicked");
      event.preventDefault();

      let pilotName = document.querySelector("input[name = pilotName]");
      let copilotName = document.querySelector("input[name = copilotName]");
      let fuelLevel = document.querySelector("input[name = fuelLevel]");
      let cargoMass = document.querySelector("input[name = cargoMass]");
      let faultyItems = document.getElementById("faultyItems");
      let launchStatus = document.getElementById("launchStatus");
      let pilotStatus =  document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");

      if (pilotName.value === "" ||!isNaN(pilotName.value) || copilotName.value === "" || !isNaN(copilotName.value) || fuelLevel.value === "" || isNaN(fuelLevel.value) || fuelLevel.value < 0  || cargoMass.value === "" || isNaN(cargoMass.value) || cargoMass.value <0 )
      {
         alert ("Make sure to enter valid information for each field!"); 
         faultyItems.style.visibility = "hidden";
         launchStatus.innerHTML = "Shuttle Not Ready for Launch ";
         launchStatus.style.color = "Red";
      }

      else 
         {
            pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`;
            copilotStatus.innerHTML = `Co Pilot ${copilotName.value} is ready for launch`;
            if (fuelLevel.value < 10000 || cargoMass.value > 10000)
            {
               faultyItems.style.visibility = "visible";
               launchStatus.innerHTML = "Shuttle Not Ready for Launch ";
               launchStatus.style.color = "Red";
         
               if (fuelLevel.value < 10000)
               {
                  
                  fuelStatus.innerHTML = "Fuel level too low for launch";
                  
               }
               else{
                  fuelStatus.innerHTML = "Fuel level high enough for launch";
               }
               if(cargoMass.value > 10000)
               {
                  cargoStatus.innerHTML = "Cargo Mass too large for the shuttle to take off";
                  
               }
               else {
                  cargoStatus.innerHTML = "Cargo Mass low enough for launch";
               }
         }

         else {
            faultyItems.style.visibility = "visible";
            document.getElementById("launchStatus").innerHTML = "Shuttle Ready for Launch ";
            launchStatus.style.color = "Green";
            fuelStatus.innerHTML = "Fuel level high enough for launch";
            cargoStatus.innerHTML = "Cargo Mass low enough for launch";
            
         }
      }
   

   });
});



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
