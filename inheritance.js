
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

//---------------------- TESTING -----------------//
var Bus1 = new Bus(6, 30, 3);
Bus1.howManyPassengers();
Bus1.working();
Bus1.amountOfPeopleVehicleCanCarry();
Bus1.howManySeatsLeft();
console.log(Bus1 instanceof Vehicle);
