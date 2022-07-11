// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   for(let index = 0; index < json.length; index++){
    const missionTarget = document.getElementById('missionTarget');
     missionTarget.innerHTML = ` 
    <script>
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${json[index].name} </li>
                    <li>Diameter: ${json[index].diameter}</li>
                    <li>Star: ${jason[index].star}</li>
                    <li>Distance from Earth: ${json[index].distance} </li>
                    <li>Number of Moons: ${json[index].moons}</li>
                </ol>
                <img src="${json[index].image}">
        
    </script>
    `;
    };
}

function validateInput(testInput) {
    if (testInput === ''){
        return "Empty";
    } else if(isNaN(testInput) === true){
        return "is not a Number";
    } else if(isNaN(testInput) === false) {
        return 'is a Number';
    } //else {
    //     //need to tell to submit form?
    // }
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
        response.json().then( function(json){
            console.log(json);
            });
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let randPlanet;
    for(indexP = 0; indexP < json.length; indexP++){
         randPlanet = Math.random();
    };
    return randPlanet;
}

// module.exports.addDestinationInfo = addDestinationInfo;
// module.exports.validateInput = validateInput;
// module.exports.formSubmission = formSubmission;
// module.exports.pickPlanet = pickPlanet; 
// module.exports.myFetch = myFetch;
