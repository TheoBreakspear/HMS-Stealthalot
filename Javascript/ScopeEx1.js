const test1 = () => {
   a = 1;
   b = 2;
   if (a = 1){
      b = 3; //no let
      console.log('b = ' + b);
   }
   console.log('b = ' + b);
}

const test2 = () => {
   a = 1;
   b = 2;
   if (a = 1){
      let b = 3; //with let
      console.log('b = ' + b);
   }
   console.log('b = ' + b);
}