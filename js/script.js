$("#newItem").focus();
// var dropDown = $('#dropDown').find(":selected").text();
var newItem = $("#newItem").val();

$("form").on("submit", function(e) {
  e.preventDefault();
  console.log("clicked!", $("#newItem").val());
  // if (dropDown == "Do Immedately"){
  	$('#doImm').append("<li>"+$("#newItem").val()+"</li>");
  // }

  $("#newItem").val("");
  $("#newItem").focus();
});

$("button").click(function(){
	$("li").first().remove();
	alert("took you long enough");
});

