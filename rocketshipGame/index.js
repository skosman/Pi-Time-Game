var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: false,
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var rocket;
var cursors;

function preload() {
    this.load. image('space', 'img/spacepixels-0.1.0/background-black.v1.png');
    this.load.image('rocket', 'img/spacepixels-0.1.0/pixel_ship_green_small_2.png');
}

function create() {
    this.add.image(400, 300, 'space');

    rocket = this.physics.add.image(100, 450, 'rocket');
    rocket.setCollideWorldBounds(true);
    cursors = this.input.keyboard.createCursorKeys();
}

function update() {
    if(cursors.left.isDown) {
        rocket.setVelocityX(-150);
    }
    else if(cursors.right.isDown) {
        rocket.setVelocityX(150);
    }
    else {
        rocket.setVelocityX(0);
    }

    if(cursors.up.isDown) {
        rocket.setVelocityY(-100);
    }
    else if(cursors.down.isDown) {
        rocket.setVelocityY(100)
    }
    else {
        rocket.setVelocityY(0);
    }
}