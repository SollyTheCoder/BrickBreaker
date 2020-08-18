import { detectCollision } from "./collisionDetection";

export default class extendBrick {
  constructor(game, position) {
    this.image = document.getElementById("img_extendBrick");
    this.size = 25;

    this.game = game;
    this.position = position;
    this.width = 80;
    this.height = 24;
    this.markedForDeletion = false;
  }
  //special bricks update  wider paddle
  update() {
    if (detectCollision(this.game.ball, this)) {
      this.game.ball.speed.y = -this.game.ball.speed.y;

      this.markedForDeletion = true;
      this.game.paddleLeft.width += 10;
      this.game.paddleRight.width += 10;
      this.game.ball.speed.y += 0.5;
    }

    if (detectCollision(this.game.ball2, this)) {
      this.game.ball2.speed.y = -this.game.ball2.speed.y;

      this.markedForDeletion = true;
      this.game.paddleRight.width += 10;
      this.game.paddleLeft.width += 10;
    }
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}
