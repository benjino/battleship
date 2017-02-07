$(document).ready(function() {
    for (var row = 0; row < 10; row++) {
      $("table").append('<tr id="' + row + '"></tr>')
      //create a new table row with id "row<currentRow>"
      for (var column = 0; column < 10; column++) {
        $('#' + row).append("<td></td>");
        //makes a new table cell with id "index<i>" under "row<currentRow"
      }
    }
});

//As a user when I click on a position, the position changes color so that I can tell that a position has been torpedoed.
//define what position is
//untouched position
//clicked position(going )
$("positionClicked").on("click", function() {

});
