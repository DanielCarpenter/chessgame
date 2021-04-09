//for constants that touch all JS files

const game_dimension = 800;
const color_tan = 0xffce9e, color_brown = 0xd18b47;
const cell_size = game_dimension / 8;
const off_set = cell_size / 2;
var board_changed = false;


// Move logic functions for chess pieces
function move_pawn(i, j) {
    let move_logic = [{'i':i-1, 'j':j}, {'i':i-1, 'j':j-1}, {'i':i-1, 'j':j+1}];
    return move_logic; 
};

function move_king(i, j) {
    let move_logic = [{'i':i-1, 'j':j-1}, {'i':i-1, 'j':j}, {'i':i-1, 'j':j+1}, {'i':i, 'j':j-1}, 
                      {'i':i, 'j':j+1}, {'i':i+1, 'j':j-1}, {'i':i+1, 'j': j}, {'i':i+1, 'j':j+1}];
    return move_logic;
}

function move_queen(i, j) {
    let move_logic = [];

    for(let k = 1; k < 8; k++) {
        move_logic.push({'i':i+k, 'j':j});
        move_logic.push({'i':i-k, 'j':j});
        move_logic.push({'i':i, 'j':j+k});
        move_logic.push({'i':i, 'j':j-k});
        move_logic.push({'i':i+k, 'j':j+k});
        move_logic.push({'i':i+k, 'j':j-k});
        move_logic.push({'i':i-k, 'j':j-k});
        move_logic.push({'i':i-k, 'j':j+k});
    }

    return move_logic;
}

function move_rook(i, j) {
    let move_logic = [];

    for(let k = 1; k < 8; k++) {
        move_logic.push({'i':i+k, 'j':j});
        move_logic.push({'i':i-k, 'j':j});
        move_logic.push({'i':i, 'j':j+k});
        move_logic.push({'i':i, 'j':j-k});
    }

    return move_logic;
}

function move_bishop(i, j) {
    let move_logic = [];

    for(let k = 1; k < 8; k++) {
        move_logic.push({'i':i+k, 'j':j+k});
        move_logic.push({'i':i+k, 'j':j-k});
        move_logic.push({'i':i-k, 'j':j-k});
        move_logic.push({'i':i-k, 'j':j+k});
    }

    return move_logic;
}

function move_knight(i, j) {
    let move_logic = [{'i':i-1, 'j':j-2}, {'i':i-2, 'j':j-1}, {'i':i-1, 'j':j+2}, {'i':i-2, 'j':j+1},
                      {'i':i+1, 'j':j-2}, {'i':i+2, 'j':j-1}, {'i':i+1, 'j':j+2}, {'i':i+2, 'j':j+1}];

    return move_logic;
}