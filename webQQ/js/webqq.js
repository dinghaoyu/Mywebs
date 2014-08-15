$(function(){
	$(".ftList ").click(function(){
		$(".ftList").removeClass("selected");
		$(this).addClass("selected");
	});

	$(".ttList").click(function(){
		var cid = $(this).attr("cID");
		$(".ttList").removeClass("cur");
		$(this).addClass("cur");
		$(".panBContent").hide();
		$(".panBContent[cID="+cid+"]").show();
	});

	$(".cList").click(function(){
		var fid = $(this).attr("frID");
		var s =$(this).attr("show");
		if(s=="0"){
			$(".ccUL[frID="+fid+"]").slideDown();
			$(this).attr("show","1");
			$(this).css("background-image",'url("css/images/open_arrow_fire.png")');
		}
		else{
			$(".ccUL[frID="+fid+"]").slideUp();
			$(this).attr("show","0");
			$(this).css("background-image","");
		}
		
	});
	$(".pannelChat").draggable({
		//cancel:".chatHd",
		containment: ".wrap",
		scroll: false
	});
	$(".min").click(function(){
		$(".pannelChat").animate({
		"width":"150px",
		"height":"30px",
		"top":"5%",
		"left":"0px"
	},200);
	});
	$(".close").click(function(){
		$(".pannelChat").hide();
	});
	
	$(".ccList").click(function(){
		var name = $(this).find(".frName").text();
		var cid = $(this).attr("chatID");
		var s = $(this).attr("show");
		//alert(cid);
		var html1 = "";
		var html2 = "";
		html1 += '<div class="nameS" chatID='+cid+'>';
		html1 += '	<img src="css/images/close.png" class="closeImg">';
		html1 += '	<span class="naTxt">'+name+'</span>';
		html1 += '</div>';

		html2 +='<div class="chatBd chat1" chatID='+cid+'></div>';
		$(".sendBtn").attr("chatID",cid);
		if (s=="0") {
			$(".name").append(html1);
			$(".nameS").removeClass("curName");
			$(".nameS[chatID="+cid+"]").addClass("curName");
			$(".chatBd").hide();
			$(".pannelChat").append(html2);
			$(this).attr("show","1");
		};
	 	if(s=="1"){
			$(".nameS").removeClass("curName");
			$(".nameS[chatID="+cid+"]").addClass("curName");
			$(".chatBd").hide();
			$(".sendBtn").attr("chatID",cid);
			$(".chatBd[chatID="+cid+"]").show();
		};
		
	});
	/*后添加元素的事件委托！！！*/
	$(document).on("click",".nameS",function(){
		var c = $(this).attr("chatID");
		$(".sendBtn").attr("chatID",c);
		$(".nameS").removeClass("curName");
		$(this).addClass("curName");
		$(".chatBd").hide();
		$(".chatBd[chatID="+c+"]").show();
	});
	$(".name").sortable();
	/*发送消息*/
	$(".sendBtn").click(function(){
		var sendMsg = $(this).parent().find(".addTxt").val();
		var html = "";
		var cid = $(this).attr("chatID");
		var name = $(".ccList[chatID="+cid+"]").find(".frName").text();		
		html += '<div class="self">';
		html +='	<img src="images/g.jpg">';
		html +='	<p class="chatNick">我</p>';
		html +='	<p class="chatContent">'+sendMsg+'</p>';
		html +='</div>';
		$(".chatBd[chatID="+cid+"]").append(html);
		$(".addTxt").val("");
	});
	$(document).on("click",".closeImg",function(){
		var cid = $(this).parent().attr("chatID");
		$(this).parent().remove();
		$(".chatBd[chatID="+cid+"]").remove();
		$(".ccList[chatID="+cid+"]").attr("show","0");
	});
	
})