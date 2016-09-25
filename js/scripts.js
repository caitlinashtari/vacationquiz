/* Back End */
var name;
var bear;


/* Front End */
$(document).ready(function(){

$("form").submit(function(event){
  name = $("input:radio[name=name]:checked").val();
  bear = $("input:radio[name=bear]:checked").val();

if (bear === "funshine") {
  $("#vacationType").append("Hawaii!");
  $("#result").show();
}
event.preventDefault();
  });
});
