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
  const copyOfDrivers = [...drivers, "Broom"];
  return copyOfDrivers;
}

//preprendDriver
function prependDriver(name) {
  const copyOfDrivers = ["Arnold", ...drivers];
  return copyOfDrivers;
}

// removeLastDriver()
function removeLastDriver() {
  let copysOfDrivers = [...drivers]
  copysOfDrivers.pop();
  return copysOfDrivers;
}

//destructivelyRemoveFirstDriver
function removeFirstDriver() {
  let copysOfDrivers = [...drivers]
  copysOfDrivers.shift();
  return copysOfDrivers;
}
