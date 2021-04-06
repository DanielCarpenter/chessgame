class Piece extends Phaser.GameObjects.Sprite {
    constructor(config) {
        super(config.scene, config.x, config.y, config.img);
        config.scene.add.existing(this);
        this.setInteractive();
        this.setScale(cell_size / 45);
        this.isWhite = config.img.charAt(0) == "w" ? true : false;
        config.scene.input.setDraggable(this);
        this.prevX = this.x;
        this.prevY = this.y;

        this.on('dragstart', function (pointer) {
            this.x = pointer.x;
            this.y = pointer.y;
        });

        this.on('drag', function(pointer, dragX, dragY) {
            this.x = pointer.x;
            this.y = pointer.y;
        });
    }
    //Rounding calculation to get exact space position
    r(x) {
        let new_x = Math.round(x/off_set) * off_set % 100 == 0 ? Math.round(x/off_set)*off_set + off_set : Math.round(x/off_set)*off_set;
        new_x = new_x >= game_dimension ? game_dimension - off_set : new_x;
        new_x = new_x <= 0 ? 50 : new_x;
        return new_x; 
    }
}