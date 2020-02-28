export class Beam extends Phaser.GameObjects.Sprite{
    body: Phaser.Physics.Arcade.Body;
    projectile: Phaser.Physics.Arcade.Group;
    constructor(scene){
        let x = scene.player.x;
        let y = scene.player.y;

        super(scene, x, y,"beam");

        scene.add.existing(this);
        

        scene.physics.world.enableBody(this);
        this.body.velocity.y = -700;
        scene.projectile.add(this);
    }

    update(){
        if (this.y < 32){
            this.destroy();
        }
    }
}