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
        var spot = board.checkSpace(x, y);
       
            if (this.pathCollision(x, y, pieces)) {
                console.log('pc found');
                return true;
            }
            else if (spot == 'ec') {
                return false;
            }
            if(spot.charAt(0) != this.piece.charAt[0] && this.isAttack(x, y))
            { 
                for( let i = 0; i < pieces.length; i++ ) {
                    if (pieces[i].x == x && pieces[i].y == y) {
                        pieces[i].destroy();
                        pieces.splice(i,1);
                        console.log(pieces.length);
                        return false;
                    }
                }
            }
            if(spot.charAt(0) != this.piece.charAt[0] && !this.isAttack(x, y)) {
                return true;
            }
        return false;
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
    pathCollision(x, y) {
        if(Math.abs(y - this.prevY) == 200) {
            if(this.isWhite && board.checkSpace(x, y+100) == 'ec') {
                console.log("I checked:", board.gridToArray(x,y+100).arrayX,board.gridToArray(x,y+100).arrayY)
                return false;
            }
            if(!this.isWhite && board.checkSpace(x, y-100) == 'ec') {
                console.log("I checked:", board.gridToArray(x,y-100).arrayX,board.gridToArray(x,y-100).arrayY)
                return false;
            }
            return true;
        }
        return false;
    }
}