class Board {
    constructor() {
        this.board = [['br','bn','bb','bq','bk','bb','bn','br'],
                      ['bp','bp','bp','bp','bp','bp','bp','bp'],
                      ['ec','ec','ec','ec','ec','ec','ec','ec'],
                      ['ec','ec','ec','ec','ec','ec','ec','ec'],
                      ['ec','ec','ec','ec','ec','ec','ec','ec'],
                      ['ec','ec','ec','ec','ec','ec','ec','ec'],
                      ['wp','wp','wp','wp','wp','wp','wp','wp'],
                      ['wr','wn','wb','wq','wk','wb','wn','wr']];
    }

    // Returns board array to be used by front-end
    getState() {
        return this.board;
    }

    /* Query possible moves from chess board
    * curr_x: current i index of the piece.
    * curr_y: current j index of the piece.
    * move_logic: function that returns an array of objects that each represent
    *               a potential move. The object must have keys 'i' and 'j'!
    * returns: an array of objects that each represent a move that the player
    *               may make on the board.
    */
    queryMove(curr_x, curr_y, move_logic) {
        let potential_moves = move_logic(curr_x, curr_y);
        let possible_moves = [];

        for(let idx = 0; idx < potential_moves.length; idx++) {
            let moveObject = potential_moves[idx];

            let i = moveObject['i'];
            let j = moveObject['j'];

            let outOfArray = (i < 0 || j < 0) || (i > 7 || j > 7);
            if(outOfArray) continue;


            let pieceCollision = this.board[i][j] != 'ec';
            if(!pieceCollision)
                possible_moves.push(moveObject);
        }

        return possible_moves;
    }
 
    move(curr_x, curr_y, moveObject) {
        let new_i = moveObject['i'];
        let new_j = moveObject['j'];
 
        this.board[new_i][new_j] = this.board[curr_x][curr_y];
        this.board[curr_x][curr_y] = 'ec';

        board_changed = true;
    }
}