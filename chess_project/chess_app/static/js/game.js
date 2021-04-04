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

    for(let i = 0; i < 8; i++) {
        for(let j = 0; j < 8; j++) {
            let cell_color = ((i+j) % 2 != 0) ? color_brown : color_tan;

            graphics.fillStyle(cell_color);
            graphics.fillRect(i * cell_size, j * cell_size, cell_size, cell_size);
            let sprite;
            switch(board_array[j][i]) {
                case "bk":
                case "wk":
                sprite = new King({scene:this,x:((i * cell_size) + off_set), y:(j * cell_size) + off_set, img:board_array[j][i]});
                break;
                case "bn":
                case "wn":
                sprite = new Knight({scene:this,x:((i * cell_size) + off_set), y:(j * cell_size) + off_set, img:board_array[j][i]});
                break;
                
                case "br":
                case "wr":
                sprite = new Rook({scene:this,x:((i * cell_size) + off_set), y:(j * cell_size) + off_set, img:board_array[j][i]});
                break;

                case "bb":
                case "wb":
                sprite = new Bishop({scene:this,x:((i * cell_size) + off_set), y:(j * cell_size) + off_set, img:board_array[j][i]});
                break;

                case "bp":
                case "wp":
                sprite = new Pawn({scene:this,x:((i * cell_size) + off_set), y:(j * cell_size) + off_set, img:board_array[j][i]});
                break;
                
                case "bq":
                case "wq":
                sprite = new Queen({scene:this,x:((i * cell_size) + off_set), y:(j * cell_size) + off_set, img:board_array[j][i]});
                break;
                    
                

            }
        }
    }
}