import FortuneWheel from '../objects/fortuneWheel'
import FpsText from '../objects/fpsText'
import Pin from '../objects/wheelPin'

export default class MainScene extends Phaser.Scene {
  fpsText

  constructor() {
    super({ key: 'MainScene' })
  }

  create() {
    new FortuneWheel(this, this.cameras.main.width / 2, this.cameras.main.width / 2);
    new Pin(this, this.cameras.main.width / 2, this.cameras.main.width / 2.6);
    this.fpsText = new FpsText(this)
    // display the Phaser.VERSION
    this.add
      .text(this.cameras.main.width - 15, 15, `Phaser v${Phaser.VERSION}`, {
        color: '#000000',
        fontSize: '24px'
      })
      .setOrigin(1, 0);

  }

  update() {
  
  }
}
