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
    this.load.image("explosion", "assets/spritesheets/explosion.png");
    this.load.image("beam", "assets/spritesheets/beam.png");
    this.load.bitmapFont("pixelFont", "assets/Font/font.png", "assets/Font/font.xml");
    this.load.audio("audio_beam", ["assets/sounds/beam.ogg", "assets/sounds/beam.mp3"]);
    this.load.audio("music", ["assets/sounds/sci-fi.ogg", "assets/sounds/sci-fi.mp3"]);
    this.load.audio("audio_explosion", ["assets/sounds/explosion.ogg", "assets/sounds/explosion.mp3"]);
  }

  create() {
    this.add.text(20,20,"Loading game...");
    this.scene.start('MainScene');

    
    this.scene.start("playGame");

    this.background = this.add.image(0,0,"background");
    this.background.setOrigin(0,0);

  }


}
