class Bishop extends Piece {
    constructor(config) {
        super(config);
        //sets sprite on center of closest tile based on pointer location on drop end
        this.on('dragend', function(pointer, dragX, dragY) {
            console.log(this.r(this.x), this.r(this.y) );
            if(Math.abs(this.r(pointer.x) - this.prevX) == Math.abs(this.r(pointer.y) - this.prevY)) {
                this.x = this.r(pointer.x);
                this.y = this.r(pointer.y);
                this.prevX = this.r(pointer.x);
                this.prevY = this.r(pointer.y);
            }
            else {
                this.x = this.prevX;
                this.y = this.prevY;
            }
            

        });
    }
}