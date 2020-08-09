var id = 8;

function show_sold () {
	init();
	var arr = document.getElementsByClassName('sold-out-tag');
	var buttons = document.getElementsByName('buy');

	for (var i = 0; i <= arr.length; i++) {
		if (sessionStorage[i+1] == "sold") {
			console.log('sold'+(i+1));
			document.getElementById(''+(i+1)).style.display = 'table-row';
			arr[i].style.display = 'block';
			buttons[i].style.display = 'none';
			
		} else {
			document.getElementById(''+(i+1)).style.display = 'none';
		}
	}
}

function show_unsold() {
	init();
	var arr = document.getElementsByClassName('sold-out-tag');
	var buttons = document.getElementsByName('buy');

	for (var i = 0; i < arr.length; i++) {
		if (sessionStorage[i+1] != "sold" && (i < 8 || sessionStorage[i+1] == 'added')) {
			console.log('sold'+(i+1));
			document.getElementById(''+(i+1)).style.display = 'table-row';
			arr[i].style.display = 'none';
			buttons[i].style.display = 'block';
		} else {
			document.getElementById(''+(i+1)).style.display = 'none';
		}
	}
}

function init () {

	for (var i = 9; i <= 16; i++) {
		if (sessionStorage[i] == "added") {
			var arr = sessionStorage["ID"+i].toString().split(",");
			document.getElementById('name'+i).innerHTML = "Property Name: "+arr[0];
			document.getElementById('loc'+i).innerHTML = "Property Location: "+arr[1];
			document.getElementById('price'+i).innerHTML = "Price: "+arr[2];
			document.getElementById('sname'+i).innerHTML = "Trader's Name: "+arr[3];

			document.getElementById(''+i).style.display = 'table-row';
		}
	}
}

function show_all () {
	init();
	var arr = document.getElementsByClassName('sold-out-tag');
	var buttons = document.getElementsByName('buy');

	for (var i = 1; i <= 16; i++) {
		if (sessionStorage[i] == "sold") {
			console.log('sold'+(i+1));
			arr[i-1].style.display = 'block';
			buttons[i-1].style.display = 'none';
		} else {
			console.log('unsold'+(i+1));
			arr[i-1].style.display = 'none';
			buttons[i-1].style.display = 'block';
		}
		if (sessionStorage[i] || i<9)
		document.getElementById(''+(i)).style.display = 'table-row';
	}
}

function show_report() {
	var choice = document.getElementById('report-type').value;
	if (choice == "Sold") show_sold();
	else if (choice == "Unsold") show_unsold();
	else show_all();
}