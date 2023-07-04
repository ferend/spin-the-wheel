import FortuneWheel from '../objects/fortuneWheel'
import FpsText from '../objects/fpsText'

export default class MainScene extends Phaser.Scene {
  fpsText

  constructor() {
    super({ key: 'MainScene' })
  }

  create() {
    var fw = new FortuneWheel(this, this.cameras.main.width / 2, this.cameras.main.width / 2);

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
