

$(document).ready(function() {
  $("#sdg").click(function(){
    



  $("#cityPicked").click(function(){
    var selectedVariable=$("#cityPicked option:selected").val();
    if(selectedVariable==="nai"){
    $("#NAIROBI1").show();
    $("#NAIROBI2").show();
    $("#NAIROBI3").show();
    }
    else if(selectedVariable==="momb"){
      $("#MOMBASA1").show();
      $("#MOMBASA2").show();
      $("#MOMBASA3").show();
    }
    else if(selectedVariable==="kis"){
      $("#KISUMU1").show();
      $("#KISUMU2").show();
      $("#KISUMU3").show();
    }else if(selectedVariable==="naks"){
      $("#NAKURU1").show();
      $("#NAKURU2").show();
      $("#NAKURU3").show();
    }else{
      alert("Kindly select a city");
    }

    $("#vp").click(function(){
      $("#kempinskiLocation").toggle();
    });
    $("#sh").click(function(){
      $("#serenaLocation").toggle();
    });
    $("#HH").click(function(){
      $("#hemingwaysLocation").toggle();
    });
    $("#SW").click(function(){
      $("#whitesandsLocation").toggle();
    });
    $("#EPM").click(function(){
      $("#pointLocation").toggle();
    });
    $("#MCh").click(function(){
      $("#continentalHotellocation").toggle();
    });
    $("#AP").click(function(){
      $("#acaciaPremierLocation").toggle();
    });
    $("#W").click(function(){
      $("#whirlSpringLocation").toggle();
    });
    $("#I").click(function(){
      $("#imperialLocation").toggle();
    });
    $("#SW").click(function(){
      $("#sarovaWoodlands").toggle();
    });
    $("#L").click(function(){
      $("#legacyLocation").toggle();
    });
    $("#EPN").click(function(){
      $("#eaglePalaceNakuruLocation").toggle();
    });

    });
  });
});



/*<h7 class="card-title">HOTELS IN NAIROBI</h7>
5 star hotels
  <ul>
    <li>Villa Rosa Kempinski </li><img src="images/images.jpeg">
    <li>Nairobi Serena Hotel</li><img src="images/serena.jpeg">
    <li>Hemingways Nairobi</li><img src="images/Hemingways.jpeg">

  </ul>



  <h7 class="card-title">HOTELS IN MOMBASA</h7>
    5 Star hotels
    <ul>
      <li>Sarova Whitesand</li><img src=images/sarovaWhitesands.jpeg""><br>
      <li>English point marina</li><img src="images/EnglishPointMarina.jpeg"><br>
      <li>Mombasa continental</li><img src="images/mombasaContinental.jpeg"><br>
    </ul>


    <h7 class="card-title">HOTELS IN KISUMU</h7>
    5 Star hotels
    <ul>
      <li>Accacia premier hotel</li><img src="images/AcaciaPremier.jpeg"><br>
      <li>Whirlspring hotel</li><img src="images/whirlSpring.jpeg"><br>
      <li>Imperial hotel</li><img src="images/Imperial.jpeg"><br>
    </ul>


    <h7 class="card-title">HOTELS IN NAKURU</h7>
    5 Star HOTELS
    <ul>
      <li>Sarova Woodlands</li><img src="images/sarovaWoodlands.jpeg"><br>
      <li>Legacy Hotel</li><img src="images/legacy.jpeg"><br>
      <li>Eagle Palace Hotel</li><img src="images/EaglePalaceNakuru.jpeg"><br>
    </ul>*/
