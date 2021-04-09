var config = {
    type: Phaser.AUTO,
    width: game_dimension,
    height: game_dimension,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function create() {
    draw(this);
}

function update() {
    if(board_changed) {
        console.log('update!');
        draw(this);
        board_changed = false;
    }
}

function draw(object) {
    var graphics = object.add.graphics();

    // Draw inital chess board
    let board_array = board.getState();

    for(let i = 0; i < 8; i++) {
        for(let j = 0; j < 8; j++) {
            let cell_color = ((i+j) % 2 != 0) ? color_brown : color_tan;

            graphics.fillStyle(cell_color);
            graphics.fillRect(i * cell_size, j * cell_size, cell_size, cell_size);
            let sprite_conf = {scene:object,x:((i * cell_size) + off_set), y:(j * cell_size) + off_set, img:board_array[j][i]};
            let sprite;

            switch(board_array[j][i]) {
                case "bk":
                case "wk":
                sprite = new Piece(sprite_conf, i, j, move_king);
                break;

                case "bn":
                case "wn":
                sprite = new Piece(sprite_conf, i, j, move_knight);
                break;
                
                case "br":
                case "wr":
                sprite = new Piece(sprite_conf, i, j, move_rook);
                break;

                case "bb":
                case "wb":
                sprite = new Piece(sprite_conf, i, j, move_bishop);
                break;

                case "bp":
                case "wp":
                sprite = new Piece(sprite_conf, i, j, move_pawn);
                break;
                
                case "bq":
                case "wq":
                sprite = new Piece(sprite_conf, i, j, move_queen);
                break;
            }
        }
    }
}