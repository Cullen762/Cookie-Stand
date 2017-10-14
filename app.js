'use strict';
// lab 6 build object literals for each store
//use a method to generate random numbers, for properties min,max,avg,
//add an array that stores the expected number of cookies sold each hour, and (strecth goal)
// how many tossers per hour
// everything is in strict order, text nodes, getEls etc
//meditate on the DOM tree like a good samurai
// how to store hours-array

//bench mark object, needs key value pairs/properties and a method to calculate **random customers per hour** (ranCustHr), using Math.floor(Math.random) and this. notation .The Math.floor prevents  too many 2's and 9's. The method needs to include a for loop in the code block to runs the length of the hours array.

//the hours open array

var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
// first and Pike
var pike = {
  name: 'pike',
  minCustHour: 23,
  maxCustHour:65,
  avgCkieHr:6.3,
  ranCustHr:[],
  cookiesSoldHr:[],
  totalCookies:0,
  //The methods (properties that act like functions) are built with a for loop that cycles through the hoursOpen array. It uses Math.floor(Math.random) and this. to calculate the number of customers min/max and  .push to populate the array.  //method for random customers
  calcRanCustHr: function(){
    for(var i = 0 ; i < hoursOpen.length; i++){
      this.ranCustHr.push(Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1) + this.minCustHour));
      //console.log(this.ranCustHr[i]);
    }

  },

calcCookiesSoldHr: function(){
    for(var j = 0; j < hoursOpen.length; j++){
      console.log(Math.round(this.avgCkieHr * this.ranCustHr[j]));
      this.cookiesSoldHr.push(Math.round(this.avgCkieHr * this.ranCustHr[j]));
    }

  },
  //the render function, this dynamically populates the html page.
  render: function(){
    var pike = document.getElementById('pike');
    var fnp = document.getElementById('fnp');

    this.calcRanCustHr();
    this.calcCookiesSoldHr();
    //appends the name of the object in the size h3 to the linked html sheet
    var h3EL = document.createElement('h3');
    h3EL.textContent = this.name;
    fnp.appendChild(h3EL);
    //appends the list, populated with random numbers created by the calcCookiesSldHr and calcranCustHr methods
    for(var k = 0; k < hoursOpen.length; k++){
      var liEl = document.createElement('li');
      console.log(this.cookiesSoldHr[k]);
      liEl.textContent = hoursOpen[k] + ' : ' + this.cookiesSoldHr[k] + ' cookies ';// this.calcCookiesSldHr had improper syntax, changed to cookiesSoldHr
      // console.log both methods to verify they were working, found bugs in syntax, deleted a few ")'s'" code is now operational

      pike.appendChild(liEl);
    }

  }
};
pike.render();

var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
// seatac
var airport = {
  name: 'seatac airport',
  minCustHour: 3,
  maxCustHour:24,
  avgCkieHr:1.2,
  ranCustHr:[],
  cookiesSoldHr:[],
  totalCookies:0,
  //The methods (properties that act like functions) are built with a for loop that cycles through the hoursOpen array. It uses Math.floor(Math.random) and this. to calculate the number of customers min/max and  .push to populate the array.  //method for random customers
  calcRanCustHr: function(){
    for(var i = 0 ; i < hoursOpen.length; i++){
      this.ranCustHr.push(Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1) + this.minCustHour));
      //console.log(this.ranCustHr[i]);
    }

  },

  calcCookiesSoldHr: function(){
    for(var j = 0; j < hoursOpen.length; j++){
      //console.log(Math.round(this.avgCkieHr * this.ranCustHr[j]));
      this.cookiesSoldHr.push(Math.round(this.avgCkieHr * this.ranCustHr[j]));
    }

  },
  //the render function, this dynamically populates the html page.
  render: function(){
    var seaTac = document.getElementById('airport');
    var sta = document.getElementById('sta');

    this.calcRanCustHr();
    this.calcCookiesSoldHr();
    //appends the name of the object in the size h3 to the linked html sheet
    var h3EL = document.createElement('h3');
    h3EL.textContent = this.name;
    seaTac.appendChild(h3EL);

    for(var k = 0; k < hoursOpen.length; k++){
      var liEl = document.createElement('li');
      console.log(seaTac);
      seaTac.appendChild(liEl);
      //console.log(this.cookiesSoldHr[k]);
      liEl.textContent = hoursOpen[k] + ' : ' + this.cookiesSoldHr[k] + ' cookies ';
      //naming conflicts
    }

  }
};
airport.render();

var alki = {
  name: 'alki',
  minCustHour: 3,
  maxCustHour:24,
  avgCkieHr:1.2,
  ranCustHr:[],
  cookiesSoldHr:[],
  totalCookies:0,
  //The methods (properties that act like functions) are built with a for loop that cycles through the hoursOpen array. It uses Math.floor(Math.random) and this. to calculate the number of customers min/max and  .push to populate the array.  //method for random customers
  calcRanCustHr: function(){
    for(var i = 0 ; i < hoursOpen.length; i++){
      this.ranCustHr.push(Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1) + this.minCustHour));
      //console.log(this.ranCustHr[i]);
    }

  },

  calcCookiesSoldHr: function(){
    for(var j = 0; j < hoursOpen.length; j++){
      //console.log(Math.round(this.avgCkieHr * this.ranCustHr[j]));
      this.cookiesSoldHr.push(Math.round(this.avgCkieHr * this.ranCustHr[j]));
    }

  },
  //the render function, this dynamically populates the html page.
  //***
  render: function(){
    var alkiShop = document.getElementById('alki');
    var alk = document.getElementById('alk');
    //naming conflict
    this.calcRanCustHr();
    this.calcCookiesSoldHr();
    //appends the name of the object in the size h3 to the linked html sheet
    var h3EL = document.createElement('h3');
    h3EL.textContent = this.name;
    alkiShop.appendChild(h3EL);

    for(var k = 0; k < hoursOpen.length; k++){
      var liEl = document.createElement('li');
      //console.log(alkiShop);
      alkiShop.appendChild(liEl);
      //console.log(this.cookiesSoldHr[k]);
      liEl.textContent = hoursOpen[k] + ' : ' + this.cookiesSoldHr[k] + ' cookies ';
      //naming conflicts
    }

  }
};
alki.render();

var seaCenter = {
  name: 'seattle center',
  minCustHour: 3,
  maxCustHour:24,
  avgCkieHr:1.2,
  ranCustHr:[],
  cookiesSoldHr:[],
  totalCookies:0,
  //The methods (properties that act like functions) are built with a for loop that cycles through the hoursOpen array. It uses Math.floor(Math.random) and this. to calculate the number of customers min/max and  .push to populate the array.  //method for random customers
  calcRanCustHr: function(){
    for(var i = 0 ; i < hoursOpen.length; i++){
      this.ranCustHr.push(Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1) + this.minCustHour));
      //console.log(this.ranCustHr[i]);
    }

  },

  calcCookiesSoldHr: function(){
    for(var j = 0; j < hoursOpen.length; j++){
      //console.log(Math.round(this.avgCkieHr * this.ranCustHr[j]));
      this.cookiesSoldHr.push(Math.round(this.avgCkieHr * this.ranCustHr[j]));
    }

  },
  //the render function, this dynamically populates the html page.
  //***
  render: function(){
    var spaceNeedle = document.getElementById('seaCenter');
    var sec = document.getElementById('sec');
    //naming conflict
    this.calcRanCustHr();
    this.calcCookiesSoldHr();
    //appends the name of the object in the size h3 to the linked html sheet
    var h3EL = document.createElement('h3');
    h3EL.textContent = this.name;
    spaceNeedle.appendChild(h3EL);

    for(var k = 0; k < hoursOpen.length; k++){
      var liEl = document.createElement('li');
      //console.log(alkiShop);
      spaceNeedle.appendChild(liEl);
      //console.log(this.cookiesSoldHr[k]);
      liEl.textContent = hoursOpen[k] + ' : ' + this.cookiesSoldHr[k] + ' cookies ';
      //naming conflicts
    }

  }
};
seaCenter.render();

var capHill = {
  name: 'capitol hill',
  minCustHour: 3,
  maxCustHour:24,
  avgCkieHr:1.2,
  ranCustHr:[],
  cookiesSoldHr:[],
  totalCookies:0,
  //The methods (properties that act like functions) are built with a for loop that cycles through the hoursOpen array. It uses Math.floor(Math.random) and this. to calculate the number of customers min/max and  .push to populate the array.  //method for random customers
  calcRanCustHr: function(){
    for(var i = 0 ; i < hoursOpen.length; i++){
      this.ranCustHr.push(Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1) + this.minCustHour));
      //console.log(this.ranCustHr[i]);
    }

  },

  calcCookiesSoldHr: function(){
    for(var j = 0; j < hoursOpen.length; j++){
      //console.log(Math.round(this.avgCkieHr * this.ranCustHr[j]));
      this.cookiesSoldHr.push(Math.round(this.avgCkieHr * this.ranCustHr[j]));
    }

  },
  //the render function, this dynamically populates the html page.
  //***
  render: function(){
    var capitolHill = document.getElementById('captlHill');
    var ch = document.getElementById('ch');
    //naming conflict
    this.calcRanCustHr();
    this.calcCookiesSoldHr();
    //appends the name of the object in the size h3 to the linked html sheet
    var h3EL = document.createElement('h3');
    h3EL.textContent = this.name;
    capitolHill.appendChild(h3EL);

    for(var k = 0; k < hoursOpen.length; k++){
      var liEl = document.createElement('li');
      //console.log(alkiShop);
      capitolHill.appendChild(liEl);
      //console.log(this.cookiesSoldHr[k]);
      liEl.textContent = hoursOpen[k] + ' : ' + this.cookiesSoldHr[k] + ' cookies ';
      //naming conflicts
    }

  }
};
capHill.render();
