// Code your solution in this file!
const returnFirstTwoDrivers=function(drivers){
  drivers=[drivers[0],drivers[1]]
  return drivers
}
const returnLastTwoDrivers=function(drivers){
  drivers=[drivers[drivers.length-2],drivers[drivers.length-1]]
  return drivers
}
let drivers=["4","5","6"]
const selectingDrivers=[returnFirstTwoDrivers(drivers),returnLastTwoDrivers(drivers)];
let selectingDrivers=function(drivers){
  selectingDrivers=[returnFirstTwoDrivers(drivers),returnLastTwoDrivers(drivers)];
}