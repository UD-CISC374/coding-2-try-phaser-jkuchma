export default class PreloadScene extends Phaser.Scene {
  background: Phaser.GameObjects.Image;
  constructor() {
    super({ key: 'PreloadScene' });
  }

  preload() {
    this.load.image("background","assets/images/background.png");
  }

  create() {
    this.scene.start('MainScene');
    this.scene.start("playGame");

    this.background = this.add.image(0,0,"background");
    this.background.setOrigin(0,0);
  }
}
