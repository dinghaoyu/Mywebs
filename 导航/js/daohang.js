$(function(){

	$(".appPic").hover(function(){
		//alert("hello");
		$(this).css({"background-color":"#eee","box-shadow":"2px 2px 5px rgb(69, 138, 91)"});
	},function(){
		$(this).css({"background-color":"fff","box-shadow":"0px 0px 0px red"});
	});
	showDigit();
	setInterval('showDigit()',1000);




});
function showDigit(){
	//alert("a");
	var curT=new Date();
	var year = curT.getYear();
	var month = curT.getMonth()+1;
	var date =curT.getDate();
	var hour = curT.getHours();
	var min = curT.getMinutes();
	var sec = curT.getSeconds();
	if (year<314) {
		year=1900+year;
	};
	var y1=Math.floor(year/1000);
	var y2=Math.floor((year%1000)/100);
	var	y3=Math.floor((year%100)/10);
	var y4=Math.floor(year%10);
	var m1=Math.floor(month/10);
	var m2=Math.floor(month%10);
	var d1=Math.floor(date/10);
	var d2=Math.floor(date%10);
	var h1=Math.floor(hour/10);
	var h2=Math.floor(hour%10);
	var mn1=Math.floor(min/10);
	var mn2=Math.floor(min%10);
	var s1=Math.floor(sec/10);
	var s2=Math.floor(sec%10);
	$("#y1").css("background-position","0px -"+y1*30+"px");
	$("#y2").css("background-position","0px -"+y2*30+"px");
	$("#y3").css("background-position","0px -"+y3*30+"px");
	$("#y4").css("background-position","0px -"+y4*30+"px");
	$("#m1").css("background-position","0px -"+m1*30+"px");
	$("#m2").css("background-position","0px -"+m2*30+"px");
	$("#d1").css("background-position","0px -"+d1*30+"px");
	$("#d2").css("background-position","0px -"+d2*30+"px");
	$("#h1").css("background-position","0px -"+h1*30+"px");
	$("#h2").css("background-position","0px -"+h2*30+"px");
	$("#mn1").css("background-position","0px -"+mn1*30+"px");
	$("#mn2").css("background-position","0px -"+mn2*30+"px");
	$("#s1").css("background-position","0px -"+s1*30+"px");
	$("#s2").css("background-position","0px -"+s2*30+"px");

}