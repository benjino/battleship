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

function onBoard(value) {
  return value < 10 && value >= 0;
}
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

  // If returns false, identifies where ship cannot be placed.
  if (board[row][col] == ship) {
    return false;
  }
  if (onBoard(nRow) && board[nRow][col] === ship) {
    return false;
  }
  if (onBoard(pRow) && board[pRow][col] === ship) {
    return false;
  }
  if (onBoard(nCol) && board[row][nCol] === ship) {
    return false;
  }
  if (onBoard(pCol) && board[row][pCol] === ship) {
    return false;
  }
  if (onBoard(nCol) &&  onBoard(nRow) && board[nRow][nCol] === ship) {
    return false;
  }
  if (onBoard(pCol) && onBoard(nRow) && board[nRow][pCol] === ship) {
    return false;
  }
  if (onBoard(pCol) && onBoard(pRow) && board[pRow][pCol] === ship) {
    return false;
  }
  if (onBoard(nCol) && onBoard(pRow) && board[pRow][nCol] === ship) {
    return false;
  //If returns true, allClear(inside placeShip) cylcles through 5 times until 5 ships placed on the board.
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
      // i-- is needed to keep count < 5 until all ships are placed on board. If count is outside of the board (i = 0; i < 5; i++)
      i--;
    }
  }
};

// shipBuilderHorizontal(5);
// shipBuilderHorizontal(4);
// shipBuilderHorizontal(3);
// shipBuilderHorizontal(2);
shipBuilderVertical(5);
shipBuilderVertical(4);
shipBuilderVertical(3);
shipBuilderVertical(2);


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

function shipBuilderHorizontal(lengthOfShip) {
  // keep running until ship is found
  for (i = 0; i < 1; i++) {
    // get random position
    var row = Math.floor(Math.random() * 10);
    var col = Math.floor(Math.random() * (10 - lengthOfShip));
    // check if clear on spot and 2 spots left and 2 spots right
    var isClear = true;
    for(j = 0; j < lengthOfShip; j++){
      isClear = isClear && allClear(row, col + j)
    }

    if(isClear){
      for(j = 0; j < lengthOfShip; j++){
        board[row][col + j] = ship;
      }
    } else {
      // i-- is needed to keep count < 5 until all ships are placed on board. If count is outside of the board (i = 0; i < 5; i++)
      i--;
    }
  }
}

function shipBuilderVertical(lengthOfShip) {
  // keep running until ship is found
  for (i = 0; i < 1; i++) {
    // get random position
    var row = Math.floor(Math.random() * (10 - lengthOfShip));
    var col = Math.floor(Math.random() * 10);
    // check if clear on spot and 2 spots left and 2 spots right
    var isClear = true;
    for(j = 0; j < lengthOfShip; j++){
      isClear = isClear && allClear(row + j, col)
    }

    if(isClear){
      for(j = 0; j < lengthOfShip; j++){
        board[row + j][col] = ship;
      }
    } else {
      // i-- is needed to keep count < 5 until all ships are placed on board. If count is outside of the board (i = 0; i < 5; i++)
      i--;
    }
  }
}
