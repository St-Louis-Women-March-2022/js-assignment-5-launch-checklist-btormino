// Write your helper functions here!
//require('isomorphic-fetch');

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
   if (validateInput(pilot) === "Empty" || validateInput(copilot) === 'Empty' || validateInput(fuelLevel) === 'Empty' || validateInput(cargoLevel) === 'Empty' ){
      alert ('All fields are required.');
      
   } else if (validateInput(pilot) === 'is a Number' || validateInput(copilot) === 'is a Number'){
      alert ('The pilot and copilot should have names, not numbers');
   } else if (validateInput(fuelLevel) === 'is not a Number' || validateInput(cargoLevel) === 'is not a Number'){
      alert ('The fuel level and cargo mass should be numbers.');
   }
   console.log(alert);
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

// module.exports.addDestinationInfo = addDestinationInfo;
// module.exports.validateInput = validateInput;
// module.exports.formSubmission = formSubmission;
// module.exports.pickPlanet = pickPlanet; 
// module.exports.myFetch = myFetch;
