//starts torpedo count to zero
var torpedo = 0;
var remaining = 25;
var hit = 0;
var miss = "";

$(document).ready(function() {
    for (var row = 0; row < 10; row++) {
      $("table").append('<tr id="' + row + '"></tr>')
      //create a new table row with id "row<currentRow>"
      for (var column = 0; column < 10; column++) {
        $('#' + row).append('<td id="' + row + column + '"></td>');
        //makes a new table cell with id "index<i>" under "row<currentRow"
      }
    }
    placeShip();
    // places ships --> function exists on model.js; calls function here.

    // user clicks position, changes color to show it has been torpedoed.
    $("td").on("click", function() {
      //adds class of cellClicked to position
      $(this).addClass("cell_clicked");
      //adds one to torpedo count
      torpedo++;
      //.text replaces h2 text with string + torpedo count.
      $("#launched").text("Torpedos Launched: " + torpedo);
      //decrements torpedo count from 25 downward.
      remaining--;
      //.text replaces element tag with string + remaining torpedos
      $("#remaining").text("Remaining: " + remaining);
      //.off() method removes .on() event handlers
      $(this).off("click");

      var row = $(this).attr("id")[0];
      var col = $(this).attr("id")[1];
      // declare variable for row and column by id position
      if (board[row][col] == 0 ) {

          $("#status").text("Miss!");

      } else if (board[row][col] == 1) {

          $("#status").text("Hit!");
          $("#hitcount").text("Hits: " + (hit += 1));

      } if (hit == 5) {

          $("#winner").text("You Win!");
          $("td").off("click");

      } else if (hit != 5 && torpedo >= 1) {
          findShip();
          $("#winner").text("You Lose!");
          $("td").off("click");
      }
    });
});


// As a user if I lose, I can see where the ships were, so that I know there were actual ships on the board.
//
// Hint: Use a .addClass("...") conditional on the torpedo counter.
