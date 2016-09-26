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
  friday = $("input:radio[name=friday]:checked").val();

if (name){
  if (name === "Tara Dactyl" || bear === "funshine") {
      $("span#nameOutput1").append(name);
      $("#vacationType").append("New Zealand!")
      $("#result, #newZealandP").show();
    } else if (name === "Rainbow Dash") {
        if(bear === "loud"){
          $("span#nameOutput2").append(name);
          $("#vacationType").append("Hawaii!")
          $("#result, #hawaiiP").show();
    } else {
      $("span#nameOutput2").append(name);
      $("#vacationType").append("Hawaii!")
      $("#result, #hawaiiP").show();
    }
  } else if (name === "Michaelangelo") {
      $("span#nameOutput3").append(name);
      $("#vacationType").append("Thailand!")
      $("#result, #thailandP").show();
  } else if (name === "Steve") {
      $("span#nameOutput4").append(name);
      $("#vacationType").append("No vacation for you!")
      $("#result, #workP").show();
  }
  else {
    alert("Ahem. A name. Please.")
  }
}
event.preventDefault();
  });
});
