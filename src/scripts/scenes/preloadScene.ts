export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' });
  }

  preload() {
    this.load.image("background", "assets/images/background.png");
    this.load.image ("ring", "assets/image/ring.png");
    this.load.image("chilidog", "assets/images/Chili_Dog");
  }

  create() {
    this.add.text(20,20,"Loading game...");
    this.scene.start('MainScene');

  }
}
