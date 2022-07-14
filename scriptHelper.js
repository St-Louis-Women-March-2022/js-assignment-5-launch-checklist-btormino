// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, image) {
   // Here is the HTML formatting for our mission target div.
  
    const missionTarget = document.getElementById('missionTarget');
     missionTarget.innerHTML = ` 
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${image}">
    `;  
}

function validateInput(testInput) {
    if (testInput === ''){
        return "Empty";
    } else if(isNaN(testInput) === true){
        return "is not a Number";
    } else if(isNaN(testInput) === false) {
        return 'is a Number';
     } 
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
        let launchStatus = document.getElementById('launchStatus');
        let pilotStatus = document.getElementById('pilotStatus');
        let copilotStatus = document.getElementById('copilotStatus');
        let fuelStatus = document.getElementById('fuelStatus');
        let cargoStatus = document.getElementById('cargoStatus');
   
   if (validateInput(pilot) === "Empty" || validateInput(copilot) === 'Empty' || validateInput(fuelLevel) === 'Empty' || validateInput(cargoLevel) === 'Empty' ){
      alert ('All fields are required.');
   } 
   else if (validateInput(pilot) === 'is a Number' || validateInput(copilot) === 'is a Number'){
      alert ('The pilot and copilot should have names, not numbers');
   } 
   else if (validateInput(fuelLevel) === 'is not a Number' || validateInput(cargoLevel) === 'is not a Number'){
      alert ('The fuel level and cargo mass should be numbers.');
      //console.log(alert);
     }  else {
        if(fuelLevel < 10000 && cargoLevel < 10000){
        list.style.visibility = 'visible';
        launchStatus.innerHTML = "Shuttle not ready for launch.";   
        launchStatus.style.color = 'red';
        pilotStatus.innerHTML = 
                `Pilot ${pilot} is ready.`;
        copilotStatus.innerHTML = `Copilot ${copilot} is ready.`;
        fuelStatus.innerHTML = 'Shuttle does not have enough fuel to make the journey.';
        cargoStatus.innerHTML = "Cargo mass low enough for launch.";
        } 
    else if (fuelLevel > 10000 && cargoLevel > 10000){
        list.style.visibility = 'visible';
        launchStatus.innerHTML = "Shuttle not ready for launch.";
        launchStatus.style.color = 'red';
        pilotStatus.innerHTML = 
                `Pilot ${pilot} is ready.`;
        copilotStatus.innerHTML = `Copilot ${copilot} is ready.`;
        fuelStatus.innerHTML = " Fuel level high enough for launch."
        cargoStatus.innerHTML = "There's too much junk in this trunk to launch.";
        }
    else if (fuelLevel < 10000 &&cargoLevel > 10000){
        list.style.visibility = 'visible';
        launchStatus.innerHTML = "Shuttle not ready for launch.";
        launchStatus.style.color = 'red';
        pilotStatus.innerHTML = 
                `Pilot ${pilot} is ready.`;
        copilotStatus.innerHTML = `Copilot ${copilot} is ready.`;
        fuelStatus.innerHTML = "Shuttle does not have enough fuel to make the journey.";
        cargoStatus.innerHTML = "There's too much junk in this trunk to launch.";
    }
    else{ 
        list.style.visibility = 'visible';   
        launchStatus.innerHTML = 'Shuttle is ready for launch.';
        launchStatus.style.color = 'green';
        pilotStatus.innerHTML = 
                `Pilot ${pilot} is ready.`;
        copilotStatus.innerHTML = `Copilot ${copilot} is ready.`;
         }
        
     }
    }


async function myFetch() {
    let planetsReturned;
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
            return response.json();
            });
           return planetsReturned; 
}


function pickPlanet(listedPlanets) {
    let randPlanet;
    {
    randIndex = Math.floor(Math.random() * 6);
    randPlanet = listedPlanets[randIndex];
    };
    return randPlanet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
