export default class PreloadScene extends Phaser.Scene {
  background: Phaser.GameObjects.Image;
  constructor() {
    super({ key: 'PreloadScene' });
  }

  preload() {
    this.load.image("background", "assets/images/background.png");
    this.load.image("player", "assets/spritesheets/player.png");
    this.load.image("ship", "assets/spritesheets/ship.png");
    this.load.image("ship2", "assets/spritesheets/ship2.png");
    this.load.image("ship3", "assets/spritesheets/ship3.png");
    this.load.image("explosion", "assets/spritesheets/explosions.png");
    this.load.spritesheet("beam", "assets/spritesheets/beam.png");
    this.load.image("background","assets/images/background.png");
  }

  create() {
    this.add.text(20,20,"Loading game...");
    this.scene.start('MainScene');

    
    this.scene.start("playGame");

    this.background = this.add.image(0,0,"background");
    this.background.setOrigin(0,0);

  }


}
