class Rook extends Phaser.GameObjects.Sprite {
    constructor(config) {
        super(config.scene, config.x, config.y, config.img);
        config.scene.add.existing(this);
        this.setInteractive();
        this.setScale(cell_size / 45);
        this.color = config.img == "br" ? "black" : "white";
        config.scene.input.setDraggable(this);

        this.on('dragstart', function (pointer) {
            this.x = pointer.x;
            this.y = pointer.y;
        });

        this.on('drag', function(pointer, dragX, dragY) {
            this.x = pointer.x;
            this.y = pointer.y;
        });

        //sets sprite on center of closest tile based on pointer location on drop end
        this.on('dragend', function(pointer, dragX, dragY) {
            this.x = Math.round(pointer.x/off_set)*off_set % 100 == 0 ? Math.round(pointer.x/off_set)*off_set + off_set : Math.round(pointer.x/off_set)*off_set;
            this.y = Math.round(pointer.y/off_set)*off_set % 100 == 0 ? Math.round(pointer.y/off_set)*off_set + off_set : Math.round(pointer.y/off_set)*off_set;
        });
    }
}