export default class WheelPin extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'pin')
        scene.add.existing(this);
    }
}  