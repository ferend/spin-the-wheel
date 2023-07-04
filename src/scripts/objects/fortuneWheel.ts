export default class FortuneWheel extends Phaser.Physics.Arcade.Sprite {
    public canSpin : boolean;
    
    private slicePrizes = ["A KEY!!!", "50 STARS", "500 STARS", "BAD LUCK!!!", "200 STARS", "100 STARS", "150 STARS", "BAD LUCK!!!"];
    private slices : number = 8;
    private prize : any;
    private prizeText : Phaser.GameObjects.Text;

    constructor(scene, x, y) {
      super(scene, x, y, 'fortune-wheel')
      scene.add.existing(this);
      scene.physics.add.existing(this)

      this.prizeText = scene.add.text(scene.centerX, 480, "");
      
      this.canSpin = true;

      this.setCollideWorldBounds(true)
      .setInteractive()
      .on('pointerdown', () => {
        this.spin();
      })
    }


    public spin() : void {
        if(this.canSpin){  
            // resetting text field
            this.prizeText.text = "";
            // the wheel will spin round from 2 to 4 times. This is just coreography
            var rounds = Phaser.Math.Between(2, 4);
            // then will rotate by a random number from 0 to 360 degrees. This is the actual spin
            var degrees =  Phaser.Math.Between(0, 360);
            // before the wheel ends spinning, we already know the prize according to "degrees" rotation and the number of slices
            this.prize = this.slices - 1 - Math.floor(degrees / (360 / this.slices));
            // now the wheel cannot spin because it's already spinning
            this.canSpin = false;
            // animation tweeen for the spin: duration 3s, will rotate by (360 * rounds + degrees) degrees
            // the quadratic easing will simulate friction
            this.scene.tweens.add({
                targets: this,
                angle: 360 * rounds + degrees,
                ease: 'Quad.easeOut',
                duration: 3000,
                onComplete: this.winPrize,
                onCompleteScope: this
            });
       }
    }
    public winPrize() : void {
        // now we can spin the wheel again
        this.canSpin = true;
        // writing the prize you just won
        this.prizeText.text = this.slicePrizes[this.prize];
   }
  }
  