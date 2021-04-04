class Pawn extends Piece {
    constructor(config) {
        super(config);
        //sets sprite on center of closest tile based on pointer location on drop end
        this.isFirstMove = true;
        this.on('dragend', function(pointer, dragX, dragY) {
            console.log(Math.round(pointer.y/off_set)*off_set + 100, this.y )
            if((((Math.round(pointer.y/off_set)*off_set + 200) == this.prevYcoord && this.isFirstMove) || ((Math.round(pointer.y/off_set)*off_set + 100) == this.prevYcoord)) && (Math.round(pointer.x/off_set)*off_set) == this.prevXcoord) {
                this.x = Math.round(pointer.x/off_set)*off_set % 100 == 0 ? Math.round(pointer.x/off_set)*off_set + off_set : Math.round(pointer.x/off_set)*off_set;
                this.y = Math.round(pointer.y/off_set)*off_set % 100 == 0 ? Math.round(pointer.y/off_set)*off_set + off_set : Math.round(pointer.y/off_set)*off_set;
                this.isFirstMove = false;
            }
            else {
                this.x = this.prevXcoord;
                this.y = this.prevYcoord;
            }
        });
    }
}