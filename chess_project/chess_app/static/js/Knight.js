class Knight extends Piece {
    constructor(config) {
        super(config);
        //sets sprite on center of closest tile based on pointer location on drop end
        this.on('dragend', function(pointer, dragX, dragY) {
            console.log(this.x, this.r(pointer.x) - 100, this.r(pointer.x) + 100, this.y )
            if((((this.r(pointer.x) - 200) == this.prevX) || ((this.r(pointer.x) + 200) == this.prevX)) && (((this.r(pointer.y) - 100) == this.prevY) || ((this.r(pointer.y) + 100) == this.prevY))) {
                this.x = this.r(pointer.x);
                this.y = this.r(pointer.y);
                this.prevX = this.r(pointer.x);
                this.prevY = this.r(pointer.y);
            }
            else if((((this.r(pointer.y) - 200) == this.prevY) || ((this.r(pointer.y) + 200) == this.prevY)) && (((this.r(pointer.x) - 100) == this.prevX) || ((this.r(pointer.x) + 100) == this.prevX))) {
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