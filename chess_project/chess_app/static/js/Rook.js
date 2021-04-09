class Rook extends Piece {
    constructor(config) {
        super(config);
        //sets sprite on center of closest tile based on pointer location on drop end
    }
    move(x, y) {
        if(this.r(y) == this.prevY) {
            return true;
        }
        if(this.r(x) == this.prevX) {
            return true;
        }
        return false;
    }
    pathCollision(x, y, pieces) {
        var destXgreater = x > this.prevX;
        var destYgreater = y > this.prevY;
        var moveX = y == this.prevY;
        var moveY = x == this.prevX;
        if (destXgreater || destYgreater) {
            for(let i = this.prevX + cell_size, j = this.prevY + cell_size; i <= x, j <= y; i = i + cell_size, j = j + cell_size) {
                if((board.checkSpace(i, this.prevY) != 'ec' && !moveY) || (board.checkSpace(this.prevX, j) != 'ec' && moveY)) {
                    return true;
                }
            }
        }
        else {
            for(let i = this.prevX - cell_size, j = this.prevY - cell_size; i > x, j > y; i = i - cell_size, j = j - cell_size) {
                if((board.checkSpace(i, this.prevY) != 'ec' && !moveY) || (board.checkSpace(this.prevX, j) != 'ec' && moveY)) {
                    return true;
                }
            }
        }
        return false;
    }
}