$(".yes-button").click(function() {
    $(".Part-Two-Yes").show();
    $(".Part-One").hide();

});


$(".stairs-img").click(function() {
    $(".Story-Ending-Yes").show();
    $(".Part-Two-Yes").hide();
});

$(".knockedout-img").click(function() {
    $(".Celebration").show();
    $(".Celebration").css("background-color", "#00ffcc");
    $(".Story-Ending-Yes").hide();
});

$(".no-button").click(function() {
    $(".Part-Two-No").show();
    $(".Part-One").hide();

});

$(".phone-img").dblclick(function() {
    $(".Story-Ending-No").show();
    $(".Part-Two-No").hide();
});

$(".pager-img").click(function(){
	$(".Story-Ending-No-Two").show();
    $(".Part-Two-No").hide();
});

$(".caught-img-two").dblclick(function(){
	$(".Celebration").show();
    $(".Story-Ending-No-Two").hide();
});


$(".Part-Two-Yes").hide();
$(".Part-Two-No").hide();
$(".Story-Ending-Yes").hide();
$(".Story-Ending-No").hide();
$(".Story-Ending-No-Two").hide();
$(".Celebration").hide();