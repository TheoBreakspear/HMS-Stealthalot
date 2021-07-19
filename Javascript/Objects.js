//dot notation
let spaceship = {
   homePlanet: 'Earth',
   color: 'silver',
   'Fuel Type': 'Turbo Fuel',
   numCrew: 5,
   flightPath: ['Venus', 'Mars', 'Saturn']
 };
 
 let crewCount = spaceship.numCrew;
 let planetArray = spaceship.flightPath;

//bracket notation
let spaceship = {
   'Fuel Type' : 'Turbo Fuel',
   'Active Mission' : true,
   homePlanet : 'Earth', 
   numCrew: 5
  };
 
 let propName =  'Active Mission';
 
 let isActive = spaceship['Active Mission'];
 
 console.log(spaceship['Active Mission'])