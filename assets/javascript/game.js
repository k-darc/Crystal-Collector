
  var winTotal = 0
  var lossTotal = 0;

  var targetTotal = getRandomInt(19, 120);
  var counter = 0;

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

  /* -------------------- Random Number Generator */
  function getNumber() {
      var minNumber = 19; // The minimum number you want
      var maxNumber = 121; // The maximum number you want

      var randomnumber = (Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber);
      $('#random-number').html(targetTotal); // Sets content of <div> to number
      $("#winC").html(winTotal);
      $("#lossC").html(lossTotal);
      console.log(targetTotal);
      return false; // Returns false just to tidy everything up
  }
  getNumber();

  /*$("#random-number").text(targetTotal); ... don't, just don't do this */

  var numberOptions = [10, 5, 3, 7]; /*these HAVE to be random 3-10 */

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

    console.log("Your total is " + counter); 
    $("#revolve").html(counter);

    if (counter === targetTotal) { 
      document.getElementById('sound-win').play();
      alert("YOU WIN !!");
      console.log("WIN");
      $("#revolve").html("");
      counter = 0;
      winTotal++;
      targetTotal = getRandomInt(19, 120);
      getNumber();
    }
    else if (counter >= targetTotal) {
      document.getElementById('sound-lose').play();
      alert("You lose !!");
      console.log("LOSE");
      $("#revolve").html("");
      counter = 0;
      lossTotal++;
      targetTotal = getRandomInt(19, 120);
      getNumber();


    }
  }); 




