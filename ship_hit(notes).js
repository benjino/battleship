//was added to line 37 controller.js
$(shipHit).addClass("ship_hit");

//line 26 model.js
board[row][col] = ship + " hit";

//was added to model.js
function shipHit() {
  for (var row = 0; row < 10; row++) {
    //loop through the row, then…
    for (var column = 0; column < 10; column++) {
      //loop through the current column…
      if (board[row][column] == "hit" ) {
        $("#" + row + column).addClass("ship_hit");
      } // having no else statement leaves board as is.
    }
  }
};
