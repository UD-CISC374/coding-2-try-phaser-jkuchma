export default class PreloadScene extends Phaser.Scene {
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
  }

  create() {
    this.add.text(20,20,"Loading game...");
    this.scene.start('MainScene');

    
  }


}
