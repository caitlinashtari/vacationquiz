/* Back End */
var result;
var vacation = function (name, bear){

  if (name) {
    if (name ==="Tara Dactyl"){
      if (bear === "bedtime"){
        return "New Zealand";
      } else if (bear === "funshine"){
        return "Hawaii";
      } else if (bear === "loud"){
        return "Thailand";
      } else if (bear === "amigo"){
        return "Work"
      }

  } else if (name ==="Rainbow Dash") {
      if (bear === "bedtime"){
        return "New Zealand";
      } else if (bear === "funshine"){
        return "Hawaii";
      } else if (bear === "loud"){
        return "Thailand";
      } else if (bear === "amigo"){
        return "Work"
      }

  } else if (name === "Michaelangelo") {
      if (bear === "bedtime"){
        return "New Zealand";
      } else if (bear === "funshine"){
        return "Hawaii";
      } else if (bear === "loud"){
        return "Thailand";
      } else if (bear === "amigo"){
        return "Work"
      }

  } else if (name === "Steve") {
      if (bear === "bedtime"){
        return "New Zealand";
      } else if (bear === "funshine"){
        return "Hawaii";
      } else if (bear === "loud"){
        return "Thailand";
      } else if (bear === "amigo"){
        return "Work"
      }
    }
  } else {
    alert("Ahem. A name. Please.")
    }
}




/* Front End */
$(document).ready(function(){

$("form").submit(function(event){
  var name = $("input:radio[name=name]:checked").val();
  var bear = $("input:radio[name=bear]:checked").val();
  var music = $("input:radio[name=music]:checked").val();
  var kryptonite = $("input:radio[name=kryptonite]:checked").val();
  var friday = $("input:radio[name=friday]:checked").val();
  var result = vacation(name, bear);

  if (result === "New Zealand"){
    $("span#nameOutput1").text(name);
    $("#vacationType").text("New Zealand!")
    $("#result, #newZealandP").show();
    $("#blank, .toHide").hide();
  } else if (result === "Hawaii") {
      $("span#nameOutput2").text(name);
      $("#vacationType").text("Hawaii!")
      $("#result, #hawaiiP").show();
      $("#blank, .toHide").hide();
  } else if (result === "Thailand"){
      $("span#nameOutput3").text(name);
      $("#vacationType").text("Thailand!")
      $("#result, #thailandP").show();
      $("#blank, .toHide").hide();
  } else if (result === "Work") {
      $("span#nameOutput4").text(name);
      $("#vacationType").text("No vacation for you!")
      $("#result, #workP").show();
      $("#blank, .toHide").hide();
  }
    event.preventDefault();
  });
});
