class Pawn extends Piece {
    constructor(config, j, i) {
        super(config);
        //sets sprite on center of closest tile based on pointer location on drop end
        this.isFirstMove = true;
        this.i = i;
        this.j = j;
        this.on('dragend', function(pointer, dragX, dragY) {
            let current_j = Math.floor(pointer.x / cell_size);
            let current_i = Math.floor(pointer.y / cell_size);
 
            let possible_moves = board.queryMove(this.i, this.j, (i, j) => {
                let move_logic = [{'i':i-1, 'j':j}, {'i':i-1, 'j':j-1}, {'i':i-1, 'j':j+1}];
                return move_logic; 
            });

            for(let idx = 0; idx < possible_moves.length; idx++) {
                let move = possible_moves[idx];

                if(current_i == move['i'] && current_j == move['j']) {
                    board.move(this.i, this.j, move);
                } else {
                    this.x = this.prevXcoord;
                    this.y = this.prevYcoord;
                }
            }
        });
    }
}