const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
   for(let i = 1; i <= 1000000; i++) {
     if ( (2 + 2) != 4) {
       console.log('Something has gone very wrong :( ');
     }
   }
 };
 
 const addTwo = num => num + 2;
 
 //a higher order function
 const timeFuncRuntime = funcParameter => {
   let t1 = Date.now();
   funcParameter();
   let t2 = Date.now();
   return t2 - t1;
 };
 
 //call the higher order function
 let time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);
 
 //another higher order function - checks if functions return same value twice
 const checkConsistentOutput = (someFunction, someArgument) => {
   const test1 = someFunction(someArgument);
   const test2 = someFunction(someArgument);
   console.log(test1 === test2 ? test1:'This function returned inconsistent results');
 }
 
 //calling another higher order function
 checkConsistentOutput(addTwo, 2);