//starts torpedo count to zero
var torpedo = 0;

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
      if (board[row][col] == 1 ) {
      // "1" comes from placeShip function; places it on the board.
        console.log("Hit");
      } else {
        console.log("Miss");
      }
      // if it finds "1" in td do 'hit', else do 'miss'
    });
});


// $(this).whatFunction?();
