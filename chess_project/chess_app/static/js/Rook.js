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
}