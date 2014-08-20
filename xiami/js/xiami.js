$(function(){
	//setTimeout('loadBG()',1000);
});

function loadBG(){
	// stackBlurImage('canvas1', 'canvas', 60, false);
	var c=document.getElementById("canvas");
	var ctx=c.getContext("2d");
	var img=document.getElementById("canvas1");
	ctx.drawImage(img,0,0,185,184,0,0,1366,700);
	stackBlurCanvasRGBA('canvas',0,0,1366,700,60);
}