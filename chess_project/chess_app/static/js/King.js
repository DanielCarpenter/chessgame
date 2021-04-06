class King extends Piece {
    constructor(config) {
        super(config);
        //sets sprite on center of closest tile based on pointer location on drop end
    }
    move(x, y) {
        if((((this.r(x) - 100) == this.prevX) || ((this.r(x) + 100) == this.prevX)) && (this.r(y)) == this.prevY) {
            return true;
        }
        if((((this.r(y) - 100) == this.prevY) || ((this.r(y) + 100) == this.prevY)) && (this.r(x)) == this.prevX) {
            return true;
        }
        if((((this.r(y) - 100) == this.prevY) || ((this.r(y) + 100) == this.prevY)) && ((this.r(x) - 100) == this.prevX) || ((this.r(x) + 100) == this.prevX)) {
            return true;
        }
        return false;
    }
}