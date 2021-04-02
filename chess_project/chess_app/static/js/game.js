const game_dimension = 800;

var config = {
    type: Phaser.AUTO,
    width: game_dimension,
    height: game_dimension,
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);
var board = new Board();

function create() {
    var graphics = this.add.graphics();

    // Draw inital chess board
    let board_array = board.getState();
    const color_tan = 0xffce9e, color_brown = 0xd18b47;
    const cell_size = game_dimension / 8;
    const off_set = cell_size / 2;
    for(let i = 0; i < 8; i++) {
        for(let j = 0; j < 8; j++) {
            let cell_color = ((i+j) % 2 != 0) ? color_brown : color_tan;

            graphics.fillStyle(cell_color);
            graphics.fillRect(i * cell_size, j * cell_size, cell_size, cell_size);
            
            if(board_array[j][i] != 'ec') {
                let sprite = this.add.sprite((i * cell_size) + off_set, (j * cell_size) + off_set, board_array[j][i]).setInteractive();
                sprite.setScale(cell_size / 45);

                this.input.setDraggable(sprite);

                this.input.on('dragstart', function (pointer, gameObject) {
                    gameObject.x = pointer.x;
                    gameObject.y = pointer.y;
                });

                this.input.on('drag', function(pointer, gameObject, dragX, dragY) {
                    gameObject.x = pointer.x;
                    gameObject.y = pointer.y;
                });
            }
        }
    }
}