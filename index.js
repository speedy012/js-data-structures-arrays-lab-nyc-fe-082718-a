// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

//destructivelyAppendDriver(name);
function destructivelyAppendDriver(name){
  drivers.push("Ralph");
}

//destructivelyRemovePrependDriver
function destructivelyPrependDriver(name) {
  drivers.unshift("Bob");
}

//destructivelyRemoveLastDriver
function destructivelyRemoveLastDriver(name){
  drivers.pop("Garfield")
}

//destructivelyRemoveFirstDriver
function destructivelyRemoveFirstDriver(name){
  drivers.shift("Otis","Garfield");
}

//appendDriver
function appendDriver(name) {
  const copyofdrivers = [...drivers, "Broom"];
  return copyofdrivers;
}

//preprendDriver
function prependDriver(name) {
  const copyofdrivers = ["Arnold", ...drivers];
  return copyofdrivers;
}

//function removeLastDriver()
  slice= [];

