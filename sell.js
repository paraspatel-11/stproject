
var id = 8;

function local_sell () {
	if (sessionStorage["idd"]) id = Number(String(sessionStorage["idd"]));
	id++;
	var name = document.getElementsByName('property-name')[0].value;
	var location = document.getElementsByName('property-location')[0].value;
	var price = document.getElementsByName('property-price')[0].value;
	var sname = document.getElementsByName('seller-name')[0].value;
	if(name==="" || location==="" || price==="" || sname==="") {
		alert("Please fill Out the Fields");
		return;
	}
	sessionStorage["ID"+id] = [name+"", location+"", price+"", sname+""];
	sessionStorage[id] = "added";
	sessionStorage["idd"] = id;
	alert("Your Property is Ready For Sale")
	//window.open("buyproperty.html", '_top');
	console.log(sessionStorage[id]);
}