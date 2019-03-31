/* id="number-to-guess"
id="your-number-total"
id="win-count"
id="loss-count"

id="crystal-1"
id="crystal-2"
id="crystal-3"
id="crystal-4" */

$(document).ready(function crystalMayhem() {

    var targetNumber = Math.floor(Math.random() * 102) + 19; // Works
    var counter = 0;
    var wins = 0;
    var losses = 0;
    var crystal = [];
    crystal = randomCrystal(4,crystal); // Works

    $("#number-to-guess").text(targetNumber);
    $("#your-number-total").val(counter);
    $("#win-count").text(wins);
    $("#loss-count").text(losses);
    $("#crystal-1").val(crystal[0]);
    $("#crystal-2").val(crystal[1]);
    $("#crystal-3").val(crystal[2]);
    $("#crystal-4").val(crystal[3]);

    
    // FUNCTIONS //

    function resetGame(){
    crystal = [];
    crystal = randomCrystal(4,crystal);
    targetNumber = Math.floor(Math.random() * 102) + 19;
    counter = 0;
    $("#number-to-guess").text(targetNumber);
    $("#your-number-total").val(counter);
    $("#crystal-1").val(crystal[0]);
    $("#crystal-2").val(crystal[1]);
    $("#crystal-3").val(crystal[2]);
    $("#crystal-4").val(crystal[3]);
    }

    // WORKS
    function randomCrystal(l,array){
    for (var i = 0; i < l; i++) {
        array.push(Math.round(Math.random() * 13) + 1);
    }
    return array;
    }


    $(".btn").on("click", function() {
        console.log ($(this).val());
        var input = $(this).val();
        input = parseInt(input);
        counter += input;
console.log (counter);
        $("#your-number-total").val(counter);  // add attribute
        // this adds an attribute to an element: elementName.attr("data-crystalvalue", numberOptions[i]);
        if (counter > targetNumber) {
            losses++;
            var $loss = $(".loss");
      
            $loss.animate({right: '+=25px', fontSize: "1.5em"}, "fast");
            $loss.animate({down: '25px'}, "slow");
            $loss.animate({right: '-=25px',  fontSize: "1em"}, "fast");
            $loss.animate({up: '25px'}, "fast");
         
            $("#loss-count").text(losses);
            resetGame();
        }
        if (counter === targetNumber) {
            wins++;
            var $win = $(".win");

            $win.animate({left: '+=25px', height: '+=50px', width: '+=50px', fontSize: "1.5em"}, "fast");
            $win.animate({down: '+=25px'}, "slow");
            $win.animate({left: '-=25px', height: '-=50px', width: '-=50px', fontSize: "1em"}, "fast");
            $win.animate({up: '+=25px'}, "fast");

            $("#win-count").text(wins);
            resetGame();
        }
    });



    $("#number-to-guess").text(targetNumber);
    $("#your-number-total").val(counter);
    $("#win-count").text(wins);
    $("#loss-count").text(losses);

});

