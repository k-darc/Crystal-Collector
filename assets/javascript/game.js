
  var winTotal = 0
  var lossTotal = 0;

  var targetTotal = 55;
  var counter = 0;

  /* -------------------- Random Number Generator */
  function getNumber() {
      var minNumber = 19; // The minimum number you want
      var maxNumber = 121; // The maximum number you want

      var randomnumber = (Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber);
      $('#random-number').html(randomnumber); // Sets content of <div> to number
      $("#winC").html(winTotal);
      $("#lossC").html(lossTotal);
      console.log(randomnumber);
      return false; // Returns false just to tidy everything up
  }
  getNumber();

  /*$("#random-number").text(targetTotal);*/

  var numberOptions = [10, 5, 3, 7];

  for (var i = 0; i < numberOptions.length; i++) {
    var imageCrystal = $("<img>");

    imageCrystal.addClass("crystal-image");

    imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    $("#crystal-array").append(imageCrystal);
  }

  $(".crystal-image").on("click", function() {

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    counter += crystalValue;

    console.log("Your total is " + counter); /*add this to "your total score is" which is the id .revolve*/
    $("#revolve").html(counter);

    if (counter === targetTotal) {
      alert("YOU WIN");
      counter = 0;
      winTotal++;
      getNumber();
    }
    else if (counter >= targetTotal) {
      alert("You lose !");
      counter = 0;
      lossTotal++;
      getNumber();

    }
  }); /*clear revolving total at the end of the game*/
/* crystal values have to become random*/




