class Pawn extends Piece {
    constructor(config) {
        super(config);
        //sets sprite on center of closest tile based on pointer location on drop end
        this.isFirstMove = true;
        this.on('dragend', function(pointer, dragX, dragY) {
            console.log(this.x, this.y )
            if(this.r(pointer.x) == this.prevX) {
                if((((this.r(pointer.y) + 200) == this.prevY && this.isFirstMove) || ((this.r(pointer.y) + 100) == this.prevY)) && this.isWhite) {
                    this.x = this.r(pointer.x);
                    this.y = this.r(pointer.y);
                    this.isFirstMove = false;
                    this.prevX = this.r(pointer.x);
                    this.prevY = this.r(pointer.y);
                }
                else if((((this.r(pointer.y) - 200) == this.prevY && this.isFirstMove) || ((this.r(pointer.y) - 100) == this.prevY)) && !this.isWhite) {
                    this.x = this.r(pointer.x);
                    this.y = this.r(pointer.y);
                    this.isFirstMove = false;
                    this.prevX = this.r(pointer.x);
                    this.prevY = this.r(pointer.y);
                }
                else {
                    this.x = this.prevX;
                    this.y = this.prevY;
                }
            }
            else {
                this.x = this.prevX;
                this.y = this.prevY;
            }
        });
    }
}