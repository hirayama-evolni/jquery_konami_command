$(function(){
	$(window).konami(function(){
		console.log("Window!");
	});
	$("div").konami(function(){
		console.log($(this).attr("id"));
	});
});
