import { detectCollision } from "./collisionDetection";

export default class multiBrick {
  constructor(game, position) {
    this.image = document.getElementById("img_powerBrick");
    this.size = 25;

    this.game = game;
    this.position = position;
    this.width = 80;
    this.height = 24;
    this.markedForDeletion = false;
  }
  //special bricks update  double ball
  update() {
    if (detectCollision(this.game.ball, this)) {
      this.game.ball.speed.y = -this.game.ball.speed.y;

      this.markedForDeletion = true;
      if (this.game.gameObjects.includes(this.game.ball2)) {
        return;
      } else {
        this.game.gameObjects = [...this.game.gameObjects, this.game.ball2];
        this.game.ball2.reset();
      }
    }
    if (detectCollision(this.game.ball2, this)) {
      this.game.ball2.speed.y = -this.game.ball2.speed.y;

      this.markedForDeletion = true;
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
