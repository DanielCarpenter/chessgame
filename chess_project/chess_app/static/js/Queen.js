class Queen extends Piece {
    constructor(config) {
        super(config);
    }
    move(x, y) {
        if(this.r(y) == this.prevY) {
            return true;
        }
        if(this.r(x) == this.prevX) {
            return true;
        }
        if(Math.abs(this.r(x) - this.prevX) == Math.abs(this.r(y) - this.prevY)) {
            return true;
        }
        return false;
    }
}