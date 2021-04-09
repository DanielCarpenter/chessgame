class Bishop extends Piece {
    constructor(config) {
        super(config);
    }
    move(x,y) {
        if(Math.abs(this.r(x) - this.prevX) == Math.abs(this.r(y) - this.prevY)) {
            return true;
        }
        return false;
    }
        pathCollision(x, y, pieces) {
        var destXgreater = x > this.prevX;
        var destYgreater = y > this.prevY;
        if (destXgreater && destYgreater) {
            for(let i = this.prevX + cell_size, j = this.prevY + cell_size; i < x, j < y; i = i + cell_size, j = j + cell_size) {
                if(board.checkSpace(i, j) != 'ec') {
                    return true;
                }
            }
        }
        if (destXgreater && !destYgreater) {
            for(let i = this.prevX + cell_size, j = this.prevY - cell_size; i < x, j > y; i = i + cell_size, j = j - cell_size) {
                if(board.checkSpace(i, j) != 'ec') {
                    return true;
                }
            }
        }
        if (!destXgreater && destYgreater) {
            for(let i = this.prevX - cell_size, j = this.prevY + cell_size; i > x, j < y; i = i - cell_size, j = j + cell_size) {
                if(board.checkSpace(i, j) != 'ec') {
                    return true;
                }
            }
        }
        if (!destXgreater && !destYgreater) {
            for(let i = this.prevX - cell_size, j = this.prevY - cell_size; i > x, j > y; i = i - cell_size, j = j - cell_size) {
                if(board.checkSpace(i, j) != 'ec') {
                    return true;
                }
            }
        }
        return false;
    }
}