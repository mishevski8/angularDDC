$(function () {
	
	var plus_5_days	= new Date;
	plus_5_days.addDays(5);
	var plus_7_days	= new Date;
	plus_7_days.addDays(7);
	var plus_9_days	= new Date;
	plus_9_days.addDays(9);
	$('.2-calendars').pickmeup({
		flat : true,
		date		: [
			new Date,
			plus_5_days,
			plus_7_days,
			plus_9_days,
			new Date(2016,6,27),
			new Date(2016,6,28),
			new Date(2016,6,29),
			new Date(2016,6,30),
			new Date(2016,6,31)
		],
		mode		: 'multiple',
		calendars	: 2
	});
});
