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

var ship = 1;
//placeShip places five single hit ships to 2D array 'board'
function placeShip() {
  //loop through board, if board[row][col] == 0, make it equal ship
  //if it already equals ship, try again
  //keep doing this until 5 ships have been placed
  for (i = 0; i < 5; i++) {

    var row = Math.floor(Math.random() * 10);
    var col = Math.floor(Math.random() * 10);
    if(allClear()board[row][col] == 0) {
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

var nRow = row - 1
var pRow = row + 1
var nCol = col - 1
var pCol = col + 1

function allClear(row, col) {
  if (nRow < 0) {
    nRow = row
  }
  if (pRow > 10) {
    pRow = row
  }
  if (nCol < 0) {
    nCol = col
  }
  if (pCol > 10) {
    pCol = col
  }
};

return (board[row][col] !== ship);
return (board[nRow][nCol] !== ship);
return (board[pRow][pCol] !== ship);
return (board[row][nCol] !== ship);
return (board[row][pCol] !== ship);
return (board[nRow][col] !== ship);
return (board[nRow][pol] !== ship);
return (board[pRow][col] !== ship);
return (board[pRow][nCol] !== ship);

//don't have ships that touch, so that there is always space between ships.

//Hint: Create a function that checks if a ship is present before placing a ship, so that two ships don't get placed in the same position.

//Hint: Update the function to check around the ship that was placed, above, below, and sides.

//Hint: Update the function work diagonally and from the corners of the board.




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
