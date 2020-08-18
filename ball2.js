import { detectCollision } from "./collisionDetection";

export default class Ball2 {
  constructor(game) {
    this.image = document.getElementById("img_ball2");
    this.size = 25;
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;

    this.game = game;
    this.reset();
  }

  reset() {
    this.position = {
      x: 10,
      y: 400
    };
    this.speed = {
      x: 2,
      y: -4
    };
  }
  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }

  update(deltaTime) {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    // wall left right
    if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {
      this.speed.x = -this.speed.x;
    }
    // wall top
    if (this.position.y < 0) {
      this.speed.y = -this.speed.y;
    }
    // ball and left paddle
    if (detectCollision(this, this.game.paddleLeft)) {
      this.speed.y = -this.speed.y;
      this.speed.x -= 1;
      this.position.y = this.game.paddleLeft.position.y - this.size;
    }
    // ball and right paddle
    if (detectCollision(this, this.game.paddleRight)) {
      this.speed.y = -this.speed.y;
      this.speed.x += 1;
      this.position.y = this.game.paddleRight.position.y - this.size;
    }
    // ball and middle paddle
    if (
      detectCollision(this, this.game.paddleRight) &&
      detectCollision(this, this.game.paddleLeft)
    ) {
      this.speed.y = -this.speed.y;
      this.position.y = this.game.paddleRight.position.y - this.size;
    }

    //losing bottom
    if (this.position.y + this.size > this.gameHeight) {
      this.game.gameObjects = [
        this.game.ball,
        this.game.paddleLeft,
        this.game.paddleRight
      ];
      return;
    }
  }
}
