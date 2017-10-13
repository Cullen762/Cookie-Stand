'use strict';
// lab 6 build object literals for each store
//use a method to generate random numbers, for properties min,max,avg,
//add an array that stores the expected number of cookies sold each hour, and (strecth goal)
// how many tossers per hour
// everything is in strict order, text nodes, getEls etc
//meditate on the DOM tree like a good samurai
// how to store hours-array

// var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//bench mark object, needs key value pairs/properties and a method to calculate **random customers per hour** (ranCustHr), using Math.floor(Math.random) and this. notation .The Math.floor prevents  too many 2's and 9's. The method needs to include a for loop in the code block to runs the length of the hours array.

//the hours open array

var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
// first and Pike
var pike = {
  name: 'Pike',
  minCustHour: 1,
  maxCustHour:2,
  avgCkieHr:2,
  ranCustHr:[],
  cookiesSldHr:[],
  totalCookies:0,
  //The methods (properties that act like functions) are built with a for loop that cycles through the hoursOpen array. It uses Math.floor(Math.random) and this. to calculate the number of customers min/max and  .push to populate the array.  //method for random customers
  calcranCustHr: function(){
    for(var i = 0 ; i < hoursOpen.length; i++){
      this.ranCustHr.push(Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour);
      return this.ranCustHr[i];

    }

  },
  //method for cookies sold per hour
  calccookiesSldHr: function(){
    for(var j = 0; j < hoursOpen.length; j++){
      this.cookiesSldHr.push(Math.floor(Math.random() * (this.ranCustHr[j])));

    }

  },
  //the render function, this dynamically populates the html page.
  render: function(){
    var pike = document.getElementById('pike');
    var fnp = document.getElementById('fnp');

    this.calcranCustHr();
    this.calccookiesSldHr();

    var h3EL = document.createElement('h3');
    h3EL.textContent = this.name;
    fnp.appendChild(h3EL);

    for(var k = 0; k < hoursOpen.length; k++){
      var liEl = document.createElement('li');
      liEl.textContent = hoursOpen[k] + ' : ' + this.calccookiesSldHr[k] + ' cookies ';

      pike.appendChild(liEl);
    }

  }
};
pike.render();
// no errors in console, but only the times are rendering, the number of cookies is coming up as "undefined"
