'use strict';
//debugger;
//***Shitsumon ga arimasu!!
// Are there other ways of calling the constructor function or does it have to be in the actual function?
//why wont my table obey?
// do I need to put stores in locations and loop through them with a for loop?

//updating to constructors need the following:
//create a location function
//create a location array
//create a total cookies by hour var
// create a net total?.

var shops = document.getElementById('tb'); //grabs existing element in html by ID
var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
//array for locations
var locations = [];
//puka for total cookies per hour
var totalCookiesPerHour = 0;

//constructor function - begins with upper case letter - will create new objects for other locations.
//this keyword points to the property or method in the object that the constructor droid creates
// the constructor function is like a droid that makes droids with a basic blue print. the parameters are for the properties in the object.
//var submission =  alert ('lab 7 and 8 will be re submitted at a later date, the numbers do change in the table ');
//var anotherSubmission = alert ('expect event listeners next time,');
//the hours open array
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
      //console.log(this.ranCustHr[i]);
    }
  },
  this.calcCookiesSoldHr = function(){//calculates cookies sold per hour
    for(var j = 0; j < hoursOpen.length; j++){
      //console.log(Math.round(this.avgCkieHr * this.ranCustHr[j]));
      this.cookiesSoldHr.push(Math.round(this.avgCkieHr * this.ranCustHr[j]));
    }

  },

  this.calcTotalCookies = function(){//calculates the total number of cookies
    for( var l = 0 ; l < hoursOpen.length; l++){
      this.totalCookies += this.cookiesSoldHr[l];
    }

  },

  //pike.makeBodyRow();
  //does it exist?
  this.makeBodyRow = function() {
    console.log('body row');
    var trEl = document.createElement('tr'); //variable(puka) for the tr element
    var tdEl = document.createElement('td');
    tdEl.textContent = this.name;
    trEl.appendChild(tdEl);

    for(var j = 0; j < this.cookiesSoldHr.length; j++){
      var tdEl = document.createElement('td');
      tdEl.textContent = this.cookiesSoldHr[j];
      trEl.appendChild(tdEl);
    }
    var toteEl = document.createElement('td');
    toteEl.textContent = this.totalCookies;
    trEl.appendChild(toteEl);
    shops.appendChild(trEl);
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
  new CreateLocation('Net Total',0,0,0);
  //console.log('This lives too!');

}
CreateStands(); //calling all prototypes,used upper case letter 'C' now the console logs work, but nothing printing to the page.

//**demo code for reference
//head,body,footer text, td, th;
function makeHeaderRow() {
  var header = document.getElementById('th'); //grabs existing element in html by ID
  var trEl = document.createElement('tr'); //variable(puka) for the tr element
  var stuff = document.createElement('td');
  var dailyTotal =  document.createElement('td');
  stuff.textContent = ' ';
  trEl.appendChild(stuff);
  dailyTotal.textContent = 'Daily Total';
  for(var i = 0 ; i < hoursOpen.length; i++){
    var tdEl = document.createElement('td');
    var textData = hoursOpen[i];
    var text = document.createTextNode(textData);
    tdEl.appendChild(text);
    trEl.appendChild(tdEl);
  }

  trEl.appendChild(dailyTotal);
  header.appendChild(trEl);
};
makeHeaderRow();
function allLocations(){
  locations[0].makeBodyRow();
  locations[1].makeBodyRow();
  locations[2].makeBodyRow();
  locations[3].makeBodyRow();
  locations[4].makeBodyRow();
  locations[5].makeBodyRow();

  console.log('it works!!');
};

allLocations();

function makeFooterRow() {
  var footer = document.getElementById('foot'); //grabs existing element in html by ID
  var trEl = document.createElement('tr'); //creates table row element
  for(var k = 0 ; k < hoursOpen.length; k++){//loops through array hoursOpen
    var tdEl = document.createElement('td');//creates table data element
    var netTotal = hoursOpen[k];//result of the daily total per shop
    var text = document.createTextNode(netTotal);
    //netTotal.textContent = 'Total';
    tdEl.appendChild(text);
    trEl.appendChild(tdEl);
    console.log('doh!');
  }

  // trEl.appendChild(text);
  // footer.appendChild(netTotal);
}
makeFooterRow();
// *the row is rendering but with 0 values, should I build out a new method? or ....?
