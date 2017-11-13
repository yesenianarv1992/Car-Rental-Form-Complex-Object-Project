 var cars = { 
     
 name: 'Enterprise Car Rental',
 types: ['economy', 'midsize'],
 EconomyCars: '200',
 EconomyCarsavailable:'120',
 MidsizeCars: '150',
 midsizeCarsAvailable: '88' ,
 getInfo: function () {
 document.getElementById("buinessName").innerHTML = this.name;
document.getElementById("econCars").innerHTML = this.types[0];
document.getElementById("econAvail").innerHTML = this.EconomyCarsavailable;
document.getElementById("midSizeCars").innerHTML = this.MidsizeCars;
document.getElementById("midsizeCarsAvail").innerHTML = this.midsizeCarsAvailable;

},
rentEcon: function (){
 this.EconomyCarsavailable--
 document.getElementById("econCars").innerHTML = this.EconomyCarsavailable;
},
rentMid: function (){
 this.MidsizeCarsavailable--
 document.getElementById("midsizeCars").innerHTML = this.midsizeCarsAvailable;

 
}
 };
//  //
 
//  };
// window.onload = function () {
//  document.getElementById("businessName").innerHTML = cars.name;
// }

//  function type() {
  
//  document.getElementById("econCars").innerHTML = cars.type[0];
//  document.getElementById("midSizeCars").innerHTML = cars.midsizeCars;

//  }
//  function Availablity () {
//  document.getElementById("econAvail").innerHTML = cars.EconomyCarsavailable;
//  document.getElementById("midsizeCarsAvail").innerHTML = cars.midsizeCarsAvailable;
//  }
 