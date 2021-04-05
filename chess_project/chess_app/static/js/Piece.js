class Piece extends Phaser.GameObjects.Sprite {
    constructor(config) {
        super(config.scene, config.x, config.y, config.img);
        config.scene.add.existing(this);
        this.setInteractive();
        this.setScale(cell_size / 45);
        this.color = config.img.charAt(0) == "b" ? "black" : "white";
        config.scene.input.setDraggable(this);
        this.prevXcoord = this.x;
        this.prevYcoord = this.y;

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
    }
}