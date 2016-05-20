
var Vehicle = function(wheels, seats) {
  this.wheels = wheels;
  this.seats = seats;
};

Vehicle.prototype.working = function(){
  if(Math.round(Math.random())) console.log(true);
  console.log(false);
};

Vehicle.prototype.amountOfPeopleVehicleCanCarry = function(){
  console.log("I can only take " + this.seats + " people");
};

function Bus(wheels, seats, passengers) {
  Vehicle.call(this, wheels, seats);
  this.passengers = passengers;
};

Bus.prototype = Object.create(Vehicle.prototype);
Bus.prototype.constructor = Bus;

Bus.prototype.howManyPassengers = function(){
  console.log(this.passengers);
};

Bus.prototype.howManySeatsLeft = function(){
  console.log(this.seats - this.passengers);
};
