//do not use arrow functions with this because it will refer to the global object
const robot = {
   energyLevel: 100,
   checkEnergy() {
     console.log(`Energy is currently at ${this.energyLevel}%.`)
   }
 }
 
 robot.checkEnergy();