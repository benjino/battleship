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

// allClear looks for where there is no ship
function allClear(row, col) {
  // is < 0 (to the left)
  var nRow = row - 1;
  // is > 0 (to the right)
  var pRow = row + 1;
  // is < 0 (to up)
  var nCol = col - 1;
  // is > 0 (to down)
  var pCol = col + 1;
  // var row = 0
  // var col = 0
 console.log(row);
 console.log(col);
 console.log(nRow);
 console.log(pRow);
 console.log(nCol);
 console.log(pCol);
//   // this is going to refer to id 00
  if (board[row][col] == ship) {
    return false;
  }
  if (nRow < 10 && board[nRow][col] === ship) {
    return false;
  }
  if (pRow < 10 && board[pRow][col] === ship) {
    return false;
  }
  if (nCol >= 0 && board[row][nCol] === ship) {
    return false;
  }
  if (pCol < 10 && board[row][pCol] === ship) {
    return false;
  }
  if (nCol >= 0 && nRow >= 0 && board[nRow][nCol] === ship) {
    return false;
  }
  if (pCol < 10 && nRow >= 0 && board[nRow][pCol] === ship) {
    return false;
  }
  if (pCol < 10 && pRow < 10 && board[pRow][pCol] === ship) {
    return false;
  }
  if (nCol >= 0 && pRow < 10 && board[pRow][nCol] === ship) {
    return false;
  } else {
    return true;
  }
};

//don't have ships that touch, so that there is always space between ships.

//Hint: Create a function that checks if a ship is present before placing a ship, so that two ships don't get placed in the same position.

//Hint: Update the function to check around the ship that was placed, above, below, and sides.

//Hint: Update the function work diagonally and from the corners of the board.


var ship = 1;
//placeShip places five single hit ships to 2D array 'board'
function placeShip() {
  //loop through board, if board[row][col] == 0, make it equal ship
  //if it already equals ship, try again
  //keep doing this until 5 ships have been placed
  for (i = 0; i < 5; i++) {

    var row = Math.floor(Math.random() * 10);
    var col = Math.floor(Math.random() * 10);
    if(allClear(row, col) && board[row][col] === 0) {
      board[row][col] = ship;
    } else {
      i--;
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
