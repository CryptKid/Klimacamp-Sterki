date = new Date();
if (date.getFullYear() == 2021 && date.getMonth() == 6){
	dateid="day"+date.getDate()
	document.getElementById(dateid).style.fontSize = "22px";
	document.getElementById(dateid).style.fontWeight = 'bold';
}
