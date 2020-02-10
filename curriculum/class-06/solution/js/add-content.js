'use strict';

function newGreeting(){

  var hourNow = prompt('What hour is it?');
  var greeting;

  if (hourNow > 18) {
    greeting = 'Good evening, Class!';
  } else if (hourNow > 12) {
    greeting = 'Good afternoon, Class!';
  } else if (hourNow >= 0) {
    greeting = 'Good morning!';
  } else {
    greeting = 'Welcome!';
  }

  return greeting;
};


var order = function (){

  var order = prompt('What do you want to buy?');
  var item;
  var total = '';

  while( order !== 'house' && order !== 'hotel' ){
    order = prompt('Enter house or hotel!');
  }

  if( order === 'house'){
    item = '<img src="images/house.png" >';
  }else if( order === 'hotel'){
    item = '<img src="images/hotel.png" >';
  }else{
    item = 'place an order of house or hotel';
  }
  
  //ask for quantity
  var quantity = prompt('How many do you want?');
  
  while( isNaN(quantity)){
    quantity = prompt('Please enter a number');
  }
  
  for(var i = 0 ; i < quantity; i++){
    total = total + item;
  }

  return total;

};




