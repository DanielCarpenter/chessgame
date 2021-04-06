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
}