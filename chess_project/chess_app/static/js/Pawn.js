class Pawn extends Piece {
    constructor(config, j, i) {
        super(config);
        //sets sprite on center of closest tile based on pointer location on drop end
        this.isFirstMove = true;
        this.i = i;
        this.j = j;
        
    }
}