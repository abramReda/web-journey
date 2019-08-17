$(document).ready(function(){
	
	
	$(".form").animate({
		top: "30%"
	},300);
	$(".form").animate({
		width: "400px"
	});
	$(".form").animate({
		height: "270px"
	},300);
	
	$(".form").animate({
		fontSize: "20px"
	},300);
	
	$(".form").animate({
		borderRadius:"30px"
		
	},200,function(){
		$("form").fadeIn(400);});
		
		
	
	$("button").animate({
		right: "40px"
	},2000);
	
	$("label").animate({
		left: "40px"
	},2000);
	
});