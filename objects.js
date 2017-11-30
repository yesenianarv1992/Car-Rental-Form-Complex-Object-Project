var carRental = { 
    cars: [
    {
        type: "Economy", 
        price: "$60",
        available: 15
    },
    {
        type: "SUV",
        price: "$100",
        available: 10
    },
    ]
};


for (var i = 0; i < carRental.cars.length; i++) {    
    var option = document.createElement("OPTION");
    option.text = carRental.cars[i].type;
    document.getElementById("dropdown").appendChild(option);
    option.setAttribute("value", i); 
    option.setAttribute("id", "car" + i);
    console.log(option.value);
}

document.getElementById("dropdown").onchange = function(){
    var select = document.getElementById("dropdown");

    document.getElementById("price").innerHTML = carRental.cars[select.value].price;
    document.getElementById("available").innerHTML = carRental.cars[select.value].available;
    
}

function formValidation(){ 
	    if (!document.getElementById("confirmation").checked) {
        alert("You must agree to the terms and conditions");
        event.preventDefault();
	    }
}

function storeRenterData() { 
    var grabValue = document.getElementById("dropdown").value; 
    
    if (carRental.cars[grabValue].available == 0) {
        alert("No cars available, choose a different car");
        event.preventDefault();
        return false;
    }
    else { 
        carRental.cars[grabValue].available--;
        document.getElementById("available").innerHTML = "Available" + carRental.cars[grabValue].available;
        var name = [];
        var car = [];
        name.push(document.getElementById("available").value);
        car.push(carRental.cars[grabValue].name);
        alert("Car booked!");
        event.preventDefault();
    }
}    