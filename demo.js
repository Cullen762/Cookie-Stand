'use strict';

var hours = ['0600','0700', '0800' , '0900','1000','1100' , '1200' , '1300' , '1400' , '1500', '1600', '1700', '1800', '1900' ];

var firstAndPike = {
  name: ' 1st and Pike',
  minCustPerHour: 23,
  maxCustPerHour: 64,
  avgCookiesSldPerHour: 6.3,
  randCustPerHour:[],
  cookieSldPerHour: [],
  totalCookies:0,

  //Math.floor prevents to many 2's and 9's
  // use Math.floor(Math.random()) to pull values from the array ?
  // practise with Math.floor(Math.random())

    // method for random customers per hour
  calcRandCustByHour: function(){
    for(var i = 0; i < hours.length; i++) {
      this.randCustPerHour.push(Math.floor(Math.random() * ( this.MaxCustPerHour - this.minCustPerHour + 1 )) + this.minCustPerHour);
    console.log(this.randCustPerHour[i]);
  }
  }
};
method for cookies sold by the hours
 calcCookieSldPerHour: function() {
   for(var j = 0;  j < hours.length; j++){
     this.calcCookieSoldHour.push(Math.round(this.avgCookiesSldPerHour * this.randCustPerHour[j]);

   }

},

render: function() {
   var firstAndPike = document.getElementById('1standpike');
   var fandp = document.getElementById('fandp');
   //calling the methods in an object literal
   this.calcRandCustByHour();
   this.calcCookieSoldHour();
   //Dom manipulation in RL
   //created a variable to be able to append an item to our list
   //creat a new h3 element
   car h3El = document.createElement('h3');
   h3EL.textContent = this.name;
   fandp.appendChild(h3El);
   for(var k =0; k< hours.length; k++){
     //stepping through the hours array
     var liEl = document.createElement('li');
     //creating li elements with text of hours
     liEL.textContent = hours[k] + ' : ' + this.cookieSldPerHour[k] + 'cookies';
     console.log(liEl);
     firstAndPike.appendChild
   }
}
