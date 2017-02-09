var ship = 1;
var board = [
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0]
];


//placeShip places five single hit ships to 2D array 'board'
function placeShip() {
  //loop through board, if board[row][col] == 0, make it equal ship
  //if it already equals ship, try again
  //keep doing this until 5 ships have been placed
  for (i = 0; i < 5; i++) {

    var row = Math.floor(Math.random() * 10);
    var col = Math.floor(Math.random() * 10);
    if(board[row][col] == 0) {
      board[row][col] = ship;
    }
  }
};

function findShip() {
  for (var row = 0; row < 10; row++) {
    //loop through the row, then…
    for (var column = 0; column < 10; column++) {
      //loop through the current column…
      if (board[row][column] == 1 ) {
        $("#" + row + column).addClass("ship_location");
      } // having no else statement leaves board as is.
    }
  }
};

  // loop through board rows and columns (consult your loop within a loop that makes the board in your controller)
  // if board[row][column] === 1, that means a ship is there
  // then .addClass to that position (maybe using 'this'?)


//Hint: Use a .addClass("...") conditional on the torpedo counter.




// for (i = 0; i < 1; i++) {
//   board[row][col + i] = 1 //moves right one spot
// };
//
//
// [row + 1]//up
// [col + 1]//right
// [row - 1]//down
// [col - 1]//left
// Create a loop that accesses the board at a random row and column and places a SHIP.

// while (condition) {
//     code block to be executed
// }

// var direction = Math.floor(Math.random() * 3);


//pick a single spot
//pick line of direction (0-4)
  // var up = 0
  // var right = 1
  // var down = 2
  // var left = 3
//make sure it fits
//place the ship, change some of those zeros into whatever you're going represent a ship.
