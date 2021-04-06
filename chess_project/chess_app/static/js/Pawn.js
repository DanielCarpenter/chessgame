class Pawn extends Piece {
    constructor(config) {
        super(config);
        //sets sprite on center of closest tile based on pointer location on drop end
        this.isFirstMove = true;
    }
    move(x,y) {
        if(this.r(x) == this.prevX) {
            if((((this.r(y) + 200) == this.prevY && this.isFirstMove) || ((this.r(y) + 100) == this.prevY)) && this.isWhite) {
                this.isFirstMove = false;
                return true;
            }
            if((((this.r(y) - 200) == this.prevY && this.isFirstMove) || ((this.r(y) - 100) == this.prevY)) && !this.isWhite) {


                this.isFirstMove = false;
                return true;
            }
        }
        if(this.isAttack(x, y)) {
            this.isFirstMove = false;
            return true;
        }
        return false;
    }
    //override
    collision(x, y, pieces) {
        x = this.r(x);
        y = this.r(y);
        for( let i = 0; i < pieces.length; i++ ) {
            if(x == pieces[i].x && y == pieces[i].y && this.isWhite == pieces[i].isWhite) {
                return true;
            }
            if(x == pieces[i].x && y == pieces[i].y && this.isWhite != pieces[i].isWhite && this.isAttack(x, y))
            {
                pieces[i].destroy();
                pieces.splice(i,1);
                console.log(pieces.length);
                return false;
            }
            if(x == pieces[i].x && y == pieces[i].y && this.isWhite != pieces[i].isWhite && !this.isAttack(x, y)) {
                return true;
            }
        }
    }

    isAttack(x, y) {
        if(Math.abs(this.r(x) - this.prevX) == 100 && (this.r(y) - this.prevY) == -100 && this.isWhite) {
            return true;
        }
        if(Math.abs(this.r(x) - this.prevX) == 100 && (this.r(y) - this.prevY) == 100 && !this.isWhite) {
            return true;
        }
        return false;
    }
}