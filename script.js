$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
	event.stopPropagation();
	$(this).parent().fadeOut(400, function(){
		$(this).remove();
	})
})

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
		extract();    
    }
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});

function extract(){
	//extract text
	var text = $("input[type='text']").val();
	//clear input box
	$("input[type='text']").val("");
	//add it to li
	$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span>" + text + "</li>");
}