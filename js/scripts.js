/* Back End */
var result;
var vacation = function (name, bear, music, kryptonite, friday){

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
  var result = vacation(name, bear, music, kryptonite, friday);


  if (result === "New Zealand"){
    $("span#nameOutput1").append(name);
    $("#vacationType").append("New Zealand!")
    $("#result, #newZealandP").show();
  } else if (result === "Hawaii") {
      $("span#nameOutput2").append(name);
      $("#vacationType").append("Hawaii!")
      $("#result, #hawaiiP").show();
  } else if (result === "Thailand"){
      $("span#nameOutput3").append(name);
      $("#vacationType").append("Thailand!")
      $("#result, #thailandP").show();
  } else if (result === "Work") {
      $("span#nameOutput4").append(name);
      $("#vacationType").append("No vacation for you!")
      $("#result, #workP").show();
  }

    event.preventDefault();
  });
});
