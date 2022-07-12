// Write your JavaScript code here!

//const { formSubmission, myFetch } = require("./scriptHelper");

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function(planetsReturned) {
       listedPlanets = planetsReturned;
       console.log(listedPlanets);
   } ).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        const planetChoice = pickPlanet(listedPlanets);
        addDestinationInfo(document, planetChoice.name, planetChoice.diameter, planetChoice.star, planetChoice.distance, planetChoice.moons, planetChoice.image);

        
        
    }) 
  
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event){
        let list = document.getElementById('faultyItems');
        let pilot = document.querySelector('input[name=pilotName]');
        let copilot = document.querySelector('input[name=copilotName]');
        let fuelLevel = document.querySelector('input[name=fuelLevel]');
        let cargoMass = document.querySelector('input[name=cargoMass]');
        event.preventDefault(); 
        formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoMass.value)//{
            if (pilotName !== "Chris"){

            } else if (copilotName !== "Blake") {
                
            } else if (fuelLevel < 10000){
                 faultyItems === visible;
                 lauchStatus === "Shuttle not ready for launch.";
                 color === 'red';
            } else if (cargoMass > 10000){
                faultyItems === visible;
                 lauchStatus === "Shuttle not ready for launch.";
                 color === 'red';
            } else{
                const faultyItems = document.getElementById('faultyItems');
                faultyItems.innerHTML = `
                <div>
                        <h2>Shuttle Ready for Launch</h2>
                        <ol>
                            <li>Pilot ${pilotName} is ready for launch.</li>
                            <li>Co-pilot ${copilotName} is ready for launch.</li>
                            <li>Fuel level is high enough for launch.</li>
                            <li>Cargo mass low enough for launch.</li>
                        </ol>
                </div>
                `
            }
            
       // };
        
        
    })
    

});