// Car Type // enum 

var types = ['small', 'hatchback', 'sedan', 'coupe', 'convertible', 'crossover', 'suv', 'mini-van','van'];
$.each(types,function(i,type){
	$('#type').append('<option value="'+type+'">'+type+'</option>');
});

// Fuel type
var types = ['Diesel', 'Petrol', 'LPG', 'Electric', 'Hybrid'];
$.each(types,function(i,type) {
	$('#fuelType').append('<option value="'+type+'">'+type+'</option>');
});


// Seats / Doors
var numDoor = ['2','3','4','5'];
$.each(numDoor,function(i,num) {
	
	$('#doors').append('<option value="'+num+'">'+num+'</option>');
});

// Seats / Doors
var numSeat = ['2','3','4','5','6','7','8','9'];
$.each(numSeat,function(i,num) {
	$('#seats').append('<option value="'+num+'">'+num+'</option>');
	
});


// Gearbox
var types = ['Manual', 'Automatic','Semi-Automatic'];
$.each(types,function(i,type) {
	$('#gearbox').append('<option value="'+type+'">'+type+'</option>');
});


// Extras
var typesM = [
	['Bluetooth', 'Navigation', 'Hands Free', 'CD Player', 'MP3'],
	['Tuner / Radio', 'Bike Rack', 'Central Locking', 'Sky Bag', 'Start Stop'],
	['Baby Seat', 'Electric Windows', 'Snow Chains', 'Snow Tires']
];
$.each(typesM,function(i,types) {
	var html = '';
	html += '<div class="col-md-4"><div class="filter_type t-left"><ul>';
	$.each(types,function(j,type) {
		html += '<li><label><input type="checkbox" name="extras[]" value="'+type+'" />'+type+'</label></li>';
	});
	html += '</ul></div></div>';
	$('#extras').append(html);
});


// Time to prepare
var hours = ['3', '6', '9' ,'12', '24', '48'];
$.each(hours,function(i,hour) {
	$('#timeToPrepare').append('<option value="'+hour+'">'+hour+'h</option>');
});
