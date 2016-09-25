/* Back End */
var name;
var bear;


/* Front End */
$(document).ready(function(){

$("form").submit(function(event){
  name = $("input:radio[name=name]:checked").val();
  bear = $("input:radio[name=bear]:checked").val();
  music = $("input:radio[name=music]:checked").val();
  kryptonite = $("input:radio[name=kryptonite]:checked").val();


if (name === "rainbow" && bear === "funshine") {
  $("#nameOutput").append("Rainbow Dash");
  $("#result1").show();
}




event.preventDefault();
  });
});
