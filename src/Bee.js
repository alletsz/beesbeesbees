var Bee = function(age, color, food, eat, job) {
  
  Grub.call(this, food, eat);

  this.age = 5
  this.color = 'yellow'
  this.job = 'keep on growing'; 


};

Bee.prototype = Object.create(Grub.prototype); //set inheritance
Bee.prototype.constructor = Bee; // set Bee constructor function

