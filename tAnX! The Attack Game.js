var game = new Phaser.Game(800, 800, Phaser.AUTO, "game", { preload: preload, create: create, update: update }),
    tank,
    randVel = Math.ceil(Math.random() * 1000),
    randSlowdown = Math.ceil(Math.random() * 100),
    randX = Math.ceil(Math.random() * 1000),
    randY = Math.ceil(Math.random() * 1000);

function preload() {
  game.load.image("tank", "tank2.png");
  game.load.image("grass", "ground.png");
}

function create() {
  randVel = Math.ceil(Math.random() * 1000);
  randSlowdown = Math.ceil(Math.random() * 100);
  randX = Math.floor(Math.random() * 1000);
  randY = Math.floor(Math.random() * 1000);

  game.physics.startSystem(Phaser.Physics.ARCADE);
  game.world.setBounds(0, 0, 1200, 1200);

  grass = game.add.sprite(0, 0, "grass");
  grass.scale.setTo(1.5, 1.5);
  tank = game.add.sprite(randX, randY, "tank");
  tank.anchor.setTo(0.6, 0.5);
  tank.scale.setTo(0.15, 0.15);

  game.physics.enable(tank, Phaser.Physics.ARCADE);
  tank.body.allowRotation = false;
  game.camera.follow(tank, Phaser.Camera.FOLLOW_LOCKON, 0.08, 0.08);
}
function update() {
  tank.rotation = game.physics.arcade.moveToPointer(tank, 60, game.input.activePointer, 350);
}