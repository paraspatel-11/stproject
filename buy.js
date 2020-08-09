
function buy_local (propertyid) {
	
		sessionStorage[propertyid] = "sold";
		alert("Property"+" "+propertyid+" "+"Brought Successfully");
		document.getElementById(''+propertyid).getElementsByClassName('sold-out-tag')[0].style.display = 'block';
		document.getElementById('buy-'+propertyid).style.display = 'none';
	}


function hide_sold () {
	hide_sold_tag();

	for (var i = 1; i <= 16; i++) {
		if (sessionStorage[i] == "sold") {
			console.log(i+" sold\n");
			document.getElementById(''+i).style.display = 'none';
		} else if (sessionStorage[i] == "added") {
			var arr = sessionStorage["ID"+i].toString().split(",");
			document.getElementById('name'+i).innerHTML = " "+arr[0];
			document.getElementById('loc'+i).innerHTML = "Location: "+arr[1];
			document.getElementById('price'+i).innerHTML = "Price: "+arr[2];
			document.getElementById('sname'+i).innerHTML = "Seller: "+arr[3];

			document.getElementById(''+i).style.display = 'table-row';
		}
	}
}

function hide_sold_tag () {
	var arr = document.getElementsByClassName('sold-out-tag');

	for (var i = 0; i < arr.length; i++)
		arr[i].style.display = 'none';

}