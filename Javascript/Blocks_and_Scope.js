const city = 'New York City'

function logCitySkyline(){
  let skyscraper = 'Empire State Building';
  return 'The stars over the ' + skyscraper + ' in ' + city;
}
//Global Scope
console.log(logCitySkyline());

function logVisibleLightWaves(){
   const lightWaves = 'Moonlight';
   console.log(lightWaves);
 }
 //Block Scope
 logVisibleLightWaves();
 console.log(lightWaves);