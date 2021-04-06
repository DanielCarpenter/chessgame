class Knight extends Piece {
    constructor(config) {
        super(config);
    }
    move(x, y) {
        if((((this.r(x) - 200) == this.prevX) || ((this.r(x) + 200) == this.prevX)) && (((this.r(y) - 100) == this.prevY) || ((this.r(y) + 100) == this.prevY))) {
            return true;
        }
        if((((this.r(y) - 200) == this.prevY) || ((this.r(y) + 200) == this.prevY)) && (((this.r(x) - 100) == this.prevX) || ((this.r(x) + 100) == this.prevX))) {
            return true;
        }
        return false;
    }
}