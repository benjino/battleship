//starts torpedo count to zero
var torpedo = 0;
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
      $(this).addClass("cellClicked");
      //adds one to torpedo count
      torpedo++;
      //.text replaces h2 text with string + torpedo count.
      $("#launched").text("Torpedos Launched: " + torpedo);
      //.off() method removes event handlers that were attached with .on().

      $(this).off("click");

      var row = $(this).attr("id")[0];
      var col = $(this).attr("id")[1];
      // declare variable for row and column by id position
      if (board[row][col] == 0 ) {

          $("#status").text("Miss!");

      } else if (board[row][col] == 1) {

          $("#status").text("Hit!");
          $("#hitcount").text("Hit count: " + (hit += 1));

      } if (hit == 5) {

          $("#winner").text("You Win!");
          $("td").off("click");

      } else if (hit != 5 && torpedo >= 25) {

          $("#winner").text("You Lose!");
          $("td").off("click");
      }
      // if it finds "1" in td do 'hit', else do 'miss'
    });
});


//If hit == 5, you win

// //console.log("Hit");
// $("#hit").text("Hit: " + torpedo);
// } else {
// //console.log("Miss");
// $("#miss").text("Miss: " + torpedo) ;
