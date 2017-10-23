// ES6
function greet(name, gender = 'Mr.', greeting = 'Hello ' + gender){
  gender = gender === undefined ?  'Mr.' : gender;
  console.log(greeting + ' ' + name);
};

greet('Alex', undefined, 'Whats up');
