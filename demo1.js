'use strict';

//this is practice tear it apart to learn it
//using lecture code as practice, my comments will be defined by: ***

//constructors! think of it like a specialized machine in a factory that creates new objects
//prototypes are the functionality that the machine adds to the objects

//we need to define our hours and store them
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
//** an array for locations that will be created and stored in the "puka"
var locations = [];
//we need to define a variable that will be dynamic depending on how many cookies
//** not sure about this,
var totalCookiesPerHour = 0;

//** and a puka for net total
var netTotal = 0;

//constructor function begin with an Uppercase letter, ***the properties of the object(s) are passed into the function as parameters, to act as a "template"
//***this.notaton will be used to assing value to the properties
// *** can the names be changed or do they have to reflect the value ex: this.minCustPerHour = minCustPerHour could be : this.minCustPerHour = mincust??
function CreateLocation(name,minCustPerHour,maxCustPerHour,avgCookieSoldPerHour) {
  this.name = name;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookieSoldPerHour = avgCookieSoldPerHour;
  this.randCustByHour = [];
  this.totalCookiesPerHour = [];
  this.totalCookies = 0;
  allLocations.push(this); //** do not understand this part HERE


//  calcRandCustByHour: function(){
//     for(var i = 0 ; i < hoursOpen.length; i++){
//       this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour));
//       //console.log(this.ranCustHr[i]);
//     }
//
//   },
//
// totalCookiesPerHour: function(){
//     for(var j = 0; j < hoursOpen.length; j++){
//       console.log(Math.round(this.avgCookieSoldPerHour * this.randCustByHour[j]));
//       this.cookiesSoldByHour.push(Math.round(this.avgCookieSoldPerHour * this.randCustByHour[j]));
//     }
//
//   },
  // //augmented assignement
  // //totalCookies
  // calcTotalCookies: function(){
  //   for( var l = 0 ; l < hoursOpen.length; l++){
  //     this.totalCookies += this.cookiesSoldHr[l];
  //   }
  // },
//}
//remember to call the METHODS in the constructor that are now prototypes available to the new objects the constructor will MakeLocation
//this.calcRandCustByHour();

//call the functions in a function if you want
//this constructor function creates five new objects with their own unique values used in properties of this object (name, minCustPerHour, maxCustPerHour, avgCookieSoldPerHour)
function makeStands() {
  new createLocation('First and Pike', 23, 65, 6.3);
  new createLocation('SeaTac Airport', 3, 24, 1.2);
  //make one for each store
};
makeStands();

//time to create the table in javascript
//make header row
//table needs an id in html

function makeHeaderRow() {
  var cookiestands = document.getElementById('cookiestands');
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  trEl.appendChild(thEl);
}

//consider a for loop for the hours
//create a th element
//give the th element some text content like hours[i];
//appendChild

//create a th element
//give the th element text content 'Daily Location Total'
//append child
 makeHeaderRow();
