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

function create() {
    var graphics = this.add.graphics();

    // Draw chess board
    const color_tan = 0xffce9e, color_brown = 0xd18b47;
    const cell_size = game_dimension / 8;
    var x = 0, y = 0;
    var cell_color = color_tan;
    for(var i = 0; i < 64; i++) {
        graphics.fillStyle(cell_color);
        graphics.fillRect(x * cell_size, y * cell_size, cell_size, cell_size);

        x = (x + 1) % 8;
        y = Math.floor((i+1)/8);

        if(x == 0)
            continue;
        else
            cell_color = (cell_color == color_tan) ? color_brown : color_tan;
    }

    this.add.sprite(100, 100, 'sprites');
}