llet condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);

condiments = ['Mayo'];
console.log(condiments);

utensils[3] = 'Spoon';
console.log(utensils);

//utensils = ['stuff'];
//console.log(utensils);
//^const arrays are mutable, but not reassignable