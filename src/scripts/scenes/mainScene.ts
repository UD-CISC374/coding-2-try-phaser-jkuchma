import ExampleObject from '../objects/exampleObject';
import {Beam} from './beam';

export default class MainScene extends Phaser.Scene {
  private exampleObject: ExampleObject;
  ship1: Phaser.GameObjects.Image;
  ship2: Phaser.GameObjects.Image;
  ship3: Phaser.GameObjects.Image;
  beam: Phaser.GameObjects.Sprite;
  background: Phaser.GameObjects.TileSprite;
  player: Phaser.Physics.Arcade.Sprite;
  cursorKeys: Phaser.Types.Input.Keyboard.CursorKeys;
  spacebar: Phaser.Input.Keyboard.Key;
  score: number;
  scoreLabel: Phaser.GameObjects.BitmapText;
  projectile: Phaser.GameObjects.Group;

  constructor() {
    super({ key: 'MainScene' });
  }

  create() {
    this.exampleObject = new ExampleObject(this, 0, 0);
    this.background = this.add.tileSprite(0, 0, this.scale.width, this.scale.height, "background");
    this.background.setOrigin(0,0);

    this.ship1 = this.add.sprite(this.scale.width/2 -50, this.scale.height/2, "ship");
    this.ship2 = this.add.sprite(this.scale.width/2 -25, this.scale.height/2, "ship2");
    this.ship3 = this.add.sprite(this.scale.width/2 + 50, this.scale.height/2, "ship3");
    this.player = this.physics.add.sprite(this.scale.width/2 +25, this.scale.height/2, "player");
    this.cursorKeys = this.input.keyboard.createCursorKeys();
    this.player.setCollideWorldBounds(true);
    this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    this.physics.add.overlap(this.player, this.ship1, this.hitplayer);
    this.physics.add.overlap(this.player, this.ship2, this.hitplayer);
    this.physics.add.overlap(this.player, this.ship3, this.hitplayer);
    this.score = 0;
    this.projectile = this.add.group();

    
  }

  moveObject(obj2, speed){
    obj2.y += speed;
    if (obj2.y > this.scale.height){
      this.resetPos(obj2);
    }
  }
  hitplayer(player, ob1){
    this.resetPos(ob1);
    this.score += 15;
    this.scoreLabel.text = "SCORE" + this.score;
  }
  resetPos(obj1){
    obj1.y = 0;
    let randomX = Phaser.Math.Between(0, this.scale.width);
    obj1 = randomX;
  }
  shootBeam(){
    let beam = new Beam(this);
  }
  update() {
    this.moveObject(this.ship1, 1);
    this.moveObject(this.ship2, 2);
    this.moveObject(this.ship3, 3);

    this.background.tilePositionY -= 0.5;
    this.background.tilePositionX -= 0.5;
    this.movePlayer();
    if (Phaser.Input.Keyboard.JustDown(this.spacebar)){
      this.shootBeam();
    }
  }

  movePlayer(){
    if (this.cursorKeys.left?.isDown){
      this.player.setVelocityX(-200);
    }
    else if(this.cursorKeys.right?.isDown){
      this.player.setVelocityX(200);
    }
  }
}