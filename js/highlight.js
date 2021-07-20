date = new Date();
if (date.getFullYear() == 2021 && date.getMonth() == 6){
	dateid="day"+date.getDate()
	daylabel=document.getElementById(dateid).style;
	daylabel.fontSize = "22px";
	daylabel.fontWeight = 'bold';
	daylabel.color="#1b7340";;
}
