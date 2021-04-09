class Piece extends Phaser.GameObjects.Sprite {
    constructor(config, col, row, move_function) {
        super(config.scene, config.x, config.y, config.img);
        this.setInteractive();
        this.setScale(cell_size / 45);

        this.color = config.img.charAt(0) == "b" ? "black" : "white";
        this.prevXcoord = this.x;
        this.prevYcoord = this.y;
        this.i = row;
        this.j = col;

        config.scene.add.existing(this);
        config.scene.input.setDraggable(this);

        this.on('dragstart', function (pointer) {
            this.prevXcoord = Math.round(pointer.x/off_set)*off_set % 100 == 0 ? Math.round(pointer.x/off_set)*off_set + off_set : Math.round(pointer.x/off_set)*off_set;
            this.prevYcoord = Math.round(pointer.y/off_set)*off_set % 100 == 0 ? Math.round(pointer.y/off_set)*off_set + off_set : Math.round(pointer.y/off_set)*off_set;
            this.x = pointer.x;
            this.y = pointer.y;
        });

        this.on('drag', function(pointer, dragX, dragY) {
            this.x = pointer.x;
            this.y = pointer.y;
        });

        this.on('dragend', function(pointer, dragX, dragY) {
            let current_j = Math.floor(pointer.x / cell_size);
            let current_i = Math.floor(pointer.y / cell_size);
 
            let possible_moves = board.queryMove(this.i, this.j, move_function);

            if(possible_moves.length == 0) {
                this.x = this.prevXcoord;
                this.y = this.prevYcoord;
            }

            for(let idx = 0; idx < possible_moves.length; idx++) {
                let move = possible_moves[idx];

                if(current_i == move['i'] && current_j == move['j']) {
                    board.move(this.i, this.j, move);
                    console.log('moved!');
                } else {
                    this.x = this.prevXcoord;
                    this.y = this.prevYcoord;
                }
            }
        });
    }
}