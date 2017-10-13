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
      console.log(this.calccookiesSldHr[j]);
    }

  },
  //the render function, this dynamically populates the html page.
  render: function(){
    var pike = document.getElementById('pike');
    var fnp = doculemtn.getElementById('fnp');
    this.calcranCustHr();
    this.calccookiesSldHr();
    var h3EL = document.createElement('h3');
    h3EL.texrContent = this.name;
    fnp.appendChild(h3E);
    for(var k = 0; k < hours.length; k++){
      var liEl = document.createElement('li');
      liEl.textContent = hours[k] + ' : ' + this.cookiesSldHr[k] + 'cookies';
      console.log(liEl);
      pike.appendChild
    }

  },
  console.log('doh!');

//   render: function() {
// var firstAndPike = document.getElementById('1standpike');
//        var fandp = document.getElementById('fandp');
//        //calling the methods in an object literal
//        this.calcRandCustByHour();
//        this.calcCookieSoldHour();
//        //Dom manipulation in RL
//        //created a variable to be able to append an item to our list
//        //creat a new h3 element
//        var h3El = document.createElement('h3');
//        h3EL.textContent = this.name;
//        fandp.appendChild(h3El);
//        for(var k =0; k< hours.length; k++){
//          //stepping through the hours array
//          var liEl = document.createElement('li');
//          //creating li elements with text of hours
//          liEL.textContent = hours[k] + ' : ' + this.cookieSldPerHour[k] + 'cookies';
//          console.log(liEl);
//          firstAndPike.appendChild
//        }
//   }
};
