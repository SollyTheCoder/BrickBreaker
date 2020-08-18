export default class PaddleLeft {
  constructor(game) {
    this.width = 75;
    this.height = 30;
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.maxSpeed = 5;
    this.speed = 0;
    this.position = {
      x: game.gameWidth / 2 - this.width,
      y: game.gameHeight - this.height - 20
    };
  }

  reset() {
    this.width = 75;
    this.height = 30;
    this.position = {
      x: this.gameWidth / 2 - this.width,
      y: this.gameHeight - this.height - 20
    };
  }

  draw(ctx) {
    ctx.fillStyle = "#09f"; // light blue
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height); //location of paddle
  }
  update(deltaTime) {
    //changing time
    this.position.x += this.speed;

    if (this.position.x < 0) this.position.x = 0;
    if (this.position.x + this.width * 2 > this.gameWidth)
      this.position.x = this.gameWidth - this.width * 2;
  }
  moveLeft() {
    this.speed = -this.maxSpeed;
  }
  moveRight() {
    this.speed = this.maxSpeed;
  }
  stop() {
    this.speed = 0;
  }
}
