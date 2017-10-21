'use strict';
//***Shitsumon ga arimasu!!
// Are there other ways of calling the constructor function or does it have to be in the actual function?
//why wont my table obey?


//updating to constructors need the following:
//create a location function
//create a location array
//create a total cookies by hour var
// create a net total?.

//the hours open array

var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
//array for locations
var locations = [];
//puka for total cookies per hour
var totalCookiesPerHour = 0;

//constructor function - begins with upper case letter - will create new objects for other locations.
//this keyword points to the property or method in the object that the constructor droid creates
// the constructor function is like a droid that makes droids with a basic blue print. the parameters are for the properties in the object.
function CreateLocation(name,minCustHour,maxCustHour,avgCkieHr){
  this.name = name;
  this.minCustHour = minCustHour;
  this.maxCustHour = maxCustHour;
  this.avgCkieHr = avgCkieHr;
  this.ranCustHr = [];
  this.cookiesSoldHr = [];
  this.totalCookies = 0;
  locations.push(this);
  //this key word indicates the method belongs to the object this function creates
  this.calcRanCustHr = function(){//calculates random number of customers by hour
    for(var i = 0 ; i < hoursOpen.length; i++){
      this.ranCustHr.push(Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1) + this.minCustHour));
      console.log(this.ranCustHr[i]);
    }
  },
  this.calcCookiesSoldHr = function(){
    for(var j = 0; j < hoursOpen.length; j++){
      console.log(Math.round(this.avgCkieHr * this.ranCustHr[j]));
      this.cookiesSoldHr.push(Math.round(this.avgCkieHr * this.ranCustHr[j]));
    }

  },

  this.calcTotalCookies = function(){
    for( var l = 0 ; l < hoursOpen.length; l++){
      this.totalCookies += this.cookiesSoldHr[l];
    }

  },
  //calling the methods inside the function
  this.calcRanCustHr();
  this.calcCookiesSoldHr();
  this.calcTotalCookies();
  //console.log('it Lives!');
}

function CreateStands(){ //a function to call all functions? what are some otherways of doing this?
  new CreateLocation('Pike', 23,65,6.3);
  new CreateLocation('Alki', 2,16,4.6);
  new CreateLocation('Seattle Center', 11,38,3.7);
  new CreateLocation('Capitol Hill',20,38,2.3);
  new CreateLocation('Seatac Airport',3,24,3.2);
  console.log('created stands!');
}
CreateStands(); //calling all prototypes,used upper case letter 'C' now the console logs work, but nothing printing to the page.

function MakeHeaderRow() {
  var cookieShops = document. getElementById('cookieshops'); //getting and existing? element by ID,"GETTER"
  var trEl = document.createElement('tr'); //creating element (table row)
  var thEl = document.createElement('th');// creating element (table head)
  trEl.appendChild(thEl);//appending the child - or - smashing the table row under the table head.

  var dailyTotal = document.getElementById('daily total'); //getting and existing? element by ID,"GETTER"
  var trEl = document.createElement('tr'); //creating element (table row
  var thEl = document.createElement('th');
  // creating element (table head)
  var h3EL = document.createElement('h3');
  h3El.textContent = this.totalCookies;
  trEL.textContent = this.totalCookies;
  trEl.appendChild(thEl);//appending the child - or - smashing the table row under the table head.
  MakeHeaderRow();
}

// function makeHeaderRow() {
//   var cookiestands = document.getElementById('cookiestands');
//   var trEl = document.createElement('tr');
//   var thEl = document.createElement('th');
//   trEl.appendChild(thEl);
// }

//consider a for loop for the hours
//create a th element
//give the th element some text content like hours[i];
//appendChild

//create a th element
//give the th element text content 'Daily Location Total'
//append child

//remeber to call makeHeaderRow();














// first and Pike
// var pike = {
//   name: 'pike',
//   minCustHour: 23,
//   maxCustHour:65,
//   avgCkieHr:6.3,
//   ranCustHr:[],
//   cookiesSoldHr:[],
//   totalCookies:10,
//   //The methods (properties that act like functions) are built with a for loop that cycles through the hoursOpen array. It uses Math.floor(Math.random) and this. to calculate the number of customers min/max and  .push to populate the array.  //method for random customers
//   calcRanCustHr: function(){
//     for(var i = 0 ; i < hoursOpen.length; i++){
//       this.ranCustHr.push(Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1) + this.minCustHour));
//       //console.log(this.ranCustHr[i]);
//     }
//
//   },
//
//   calcCookiesSoldHr: function(){
//     for(var j = 0; j < hoursOpen.length; j++){
//       console.log(Math.round(this.avgCkieHr * this.ranCustHr[j]));
//       this.cookiesSoldHr.push(Math.round(this.avgCkieHr * this.ranCustHr[j]));
//     }
//
//   },
//   //augmented assignement
//   //totalCookies
//   calcTotalCookies: function(){
//     for( var l = 0 ; l < hoursOpen.length; l++){
//       this.totalCookies += this.cookiesSoldHr[l];
//     }
//   },
//   //the render function, this dynamically populates the html page.
//   render: function(){
//     var pike = document.getElementById('pike');
//     var fnp = document.getElementById('fnp');
//     //var total = document.getElementsById('total');
//     this.calcRanCustHr();
//     this.calcCookiesSoldHr();
//     this.calcTotalCookies();
//     //appends the name of the object in the size h3 to the linked html sheet
//     var h3EL = document.createElement('h3');
//     h3EL.textContent = this.name;
//     fnp.appendChild(h3EL);
//     //appends the list, populated with random numbers created by the calcCookiesSldHr and calcranCustHr methods
//     for(var k = 0; k < hoursOpen.length; k++){
//       var liEl = document.createElement('li');
//       console.log(this.cookiesSoldHr[k]);
//       liEl.textContent = hoursOpen[k] + ' : ' + this.cookiesSoldHr[k] + ' cookies ';
//
//       pike.appendChild(liEl);
//     }
//     //appends total element to bottom of page
//     var totalEl = document.createElement('li');
//     totalEl.textContent = ' total ' + this.totalCookies;
//
//     pike.appendChild(totalEl);
//   }
// };
//
// pike.render();
//
// // alki
// var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
//
// var alki = {
//   name: 'alki',
//   minCustHour: 2,
//   maxCustHour:16,
//   avgCkieHr:4.6,
//   ranCustHr:[],
//   cookiesSoldHr:[],
//   totalCookies:10,
//   //The methods (properties that act like functions) are built with a for loop that cycles through the hoursOpen array. It uses Math.floor(Math.random) and this. to calculate the number of customers min/max and  .push to populate the array.  //method for random customers
//   calcRanCustHr: function(){
//     for(var i = 0 ; i < hoursOpen.length; i++){
//       this.ranCustHr.push(Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1) + this.minCustHour));
//       //console.log(this.ranCustHr[i]);
//     }
//
//   },
//
//   calcCookiesSoldHr: function(){
//     for(var j = 0; j < hoursOpen.length; j++){
//       console.log(Math.round(this.avgCkieHr * this.ranCustHr[j]));
//       this.cookiesSoldHr.push(Math.round(this.avgCkieHr * this.ranCustHr[j]));
//     }
//
//   },
//   //augmented assignement
//   //totalCookies
//   calcTotalCookies: function(){
//     for( var l = 0 ; l < hoursOpen.length; l++){
//       this.totalCookies += this.cookiesSoldHr[l];
//     }
//   },
//   //the render function, this dynamically populates the html page.
//   render: function(){
//     var alkiShop = document.getElementById('alki');
//     var alk = document.getElementById('alk');
//     //var total = document.getElementsById('total');
//     this.calcRanCustHr();
//     this.calcCookiesSoldHr();
//     this.calcTotalCookies();
//     //appends the name of the object in the size h3 to the linked html sheet
//     var h3EL = document.createElement('h3');
//     h3EL.textContent = this.name;
//     alkiShop.appendChild(h3EL);
//     //appends the list, populated with random numbers created by the calcCookiesSldHr and calcranCustHr methods
//     for(var k = 0; k < hoursOpen.length; k++){
//       var liEl = document.createElement('li');
//       //console.log(this.cookiesSoldHr[k]);
//       liEl.textContent = hoursOpen[k] + ' : ' + this.cookiesSoldHr[k] + ' cookies ';
//
//       alkiShop.appendChild(liEl);
//     }
//     //appends total element to bottom of page
//     var totalEl = document.createElement('li');
//     totalEl.textContent = ' total ' + this.totalCookies;
//
//     alkiShop.appendChild(totalEl);
//   }
// };
//
// alki.render();
//
// //Seattle Center
// var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
// // first and Pike
// var seattleCenter = {
//   name: 'Seattle Center',
//   minCustHour: 11,
//   maxCustHour:38,
//   avgCkieHr:3.7,
//   ranCustHr:[],
//   cookiesSoldHr:[],
//   totalCookies:10,
//   //The methods (properties that act like functions) are built with a for loop that cycles through the hoursOpen array. It uses Math.floor(Math.random) and this. to calculate the number of customers min/max and  .push to populate the array.  //method for random customers
//   calcRanCustHr: function(){
//     for(var i = 0 ; i < hoursOpen.length; i++){
//       this.ranCustHr.push(Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1) + this.minCustHour));
//       //console.log(this.ranCustHr[i]);
//     }
//
//   },
//
//   calcCookiesSoldHr: function(){
//     for(var j = 0; j < hoursOpen.length; j++){
//       console.log(Math.round(this.avgCkieHr * this.ranCustHr[j]));
//       this.cookiesSoldHr.push(Math.round(this.avgCkieHr * this.ranCustHr[j]));
//     }
//
//   },
//   //augmented assignement
//   //totalCookies
//   calcTotalCookies: function(){
//     for( var l = 0 ; l < hoursOpen.length; l++){
//       this.totalCookies += this.cookiesSoldHr[l];
//     }
//   },
//   //the render function, this dynamically populates the html page.
//   render: function(){
//     var spaceNeedle = document.getElementById('seaCenter');
//     var seaCenter = document.getElementById('sec');
//     //var total = document.getElementsById('total');
//     this.calcRanCustHr();
//     this.calcCookiesSoldHr();
//     this.calcTotalCookies();
//     //appends the name of the object in the size h3 to the linked html sheet
//     var h3EL = document.createElement('h3');
//     h3EL.textContent = this.name;
//     spaceNeedle.appendChild(h3EL);
//     //appends the list, populated with random numbers created by the calcCookiesSldHr and calcranCustHr methods
//     for(var k = 0; k < hoursOpen.length; k++){
//       var liEl = document.createElement('li');
//       //console.log(this.cookiesSoldHr[k]);
//       liEl.textContent = hoursOpen[k] + ' : ' + this.cookiesSoldHr[k] + ' cookies ';
//
//       spaceNeedle.appendChild(liEl);
//     }
//     //appends total element to bottom of page
//     var totalEl = document.createElement('li');
//     totalEl.textContent = ' total ' + this.totalCookies;
//
//     spaceNeedle.appendChild(totalEl);
//   }
// };
//
// seattleCenter.render();
//
// //capitol hill
// var capitolHill = {
//   name: 'Capitol Hill',
//   minCustHour: 20,
//   maxCustHour:38,
//   avgCkieHr:2.3,
//   ranCustHr:[],
//   cookiesSoldHr:[],
//   totalCookies:10,
//   //The methods (properties that act like functions) are built with a for loop that cycles through the hoursOpen array. It uses Math.floor(Math.random) and this. to calculate the number of customers min/max and  .push to populate the array.  //method for random customers
//   calcRanCustHr: function(){
//     for(var i = 0 ; i < hoursOpen.length; i++){
//       this.ranCustHr.push(Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1) + this.minCustHour));
//       //console.log(this.ranCustHr[i]);
//     }
//
//   },
//
//   calcCookiesSoldHr: function(){
//     for(var j = 0; j < hoursOpen.length; j++){
//       console.log(Math.round(this.avgCkieHr * this.ranCustHr[j]));
//       this.cookiesSoldHr.push(Math.round(this.avgCkieHr * this.ranCustHr[j]));
//     }
//
//   },
//   //augmented assignement
//   //totalCookies
//   calcTotalCookies: function(){
//     for( var l = 0 ; l < hoursOpen.length; l++){
//       this.totalCookies += this.cookiesSoldHr[l];
//     }
//   },
//   //the render function, this dynamically populates the html page.
//   render: function(){
//     var capHill = document.getElementById('cph');
//     var ch = document.getElementById('ch');
//     //var total = document.getElementsById('total');
//     this.calcRanCustHr();
//     this.calcCookiesSoldHr();
//     this.calcTotalCookies();
//     //appends the name of the object in the size h3 to the linked html sheet
//     var h3EL = document.createElement('h3');
//     h3EL.textContent = this.name;
//     capHill.appendChild(h3EL);
//     //appends the list, populated with random numbers created by the calcCookiesSldHr and calcranCustHr methods
//     for(var k = 0; k < hoursOpen.length; k++){
//       var liEl = document.createElement('li');
//       //console.log(this.cookiesSoldHr[k]);
//       liEl.textContent = hoursOpen[k] + ' : ' + this.cookiesSoldHr[k] + ' cookies ';
//
//       capHill.appendChild(liEl);
//     }
//     //appends total element to bottom of page
//     var totalEl = document.createElement('li');
//     totalEl.textContent = ' total ' + this.totalCookies;
//
//     capHill.appendChild(totalEl);
//   }
// };
//
// capitolHill.render();
//
// //SeaTac Airport
// var seaTacAirport = {
//   name: 'SeaTac Airport',
//   minCustHour: 3,
//   maxCustHour:24,
//   avgCkieHr:1.2,
//   ranCustHr:[],
//   cookiesSoldHr:[],
//   totalCookies:10,
//   //The methods (properties that act like functions) are built with a for loop that cycles through the hoursOpen array. It uses Math.floor(Math.random) and this. to calculate the number of customers min/max and  .push to populate the array.  //method for random customers
//   calcRanCustHr: function(){
//     for(var i = 0 ; i < hoursOpen.length; i++){
//       this.ranCustHr.push(Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1) + this.minCustHour));
//       //console.log(this.ranCustHr[i]);
//     }
//
//   },
//
//   calcCookiesSoldHr: function(){
//     for(var j = 0; j < hoursOpen.length; j++){
//       console.log(Math.round(this.avgCkieHr * this.ranCustHr[j]));
//       this.cookiesSoldHr.push(Math.round(this.avgCkieHr * this.ranCustHr[j]));
//     }
//
//   },
//   //augmented assignement
//   //totalCookies
//   calcTotalCookies: function(){
//     for( var l = 0 ; l < hoursOpen.length; l++){
//       this.totalCookies += this.cookiesSoldHr[l];
//     }
//   },
//   //the render function, this dynamically populates the html page.
//   render: function(){
//     var seaTac = document.getElementById('airport');
//     var sta = document.getElementById('sta');
//     //var total = document.getElementsById('total');
//     this.calcRanCustHr();
//     this.calcCookiesSoldHr();
//     this.calcTotalCookies();
//     //appends the name of the object in the size h3 to the linked html sheet
//     var h3EL = document.createElement('h3');
//     h3EL.textContent = this.name;
//     seaTac.appendChild(h3EL);
//     //appends the list, populated with random numbers created by the calcCookiesSldHr and calcranCustHr methods
//     for(var k = 0; k < hoursOpen.length; k++){
//       var liEl = document.createElement('li');
//       //console.log(this.cookiesSoldHr[k]);
//       liEl.textContent = hoursOpen[k] + ' : ' + this.cookiesSoldHr[k] + ' cookies ';
//
//       seaTac.appendChild(liEl);
//     }
//     //appends total element to bottom of page
//     var totalEl = document.createElement('li');
//     totalEl.textContent = ' total ' + this.totalCookies;
//
//     seaTac.appendChild(totalEl);
//   }
// };
//
// seaTacAirport.render();
