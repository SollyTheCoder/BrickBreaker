import PaddleRight from "./paddleRight";
import PaddleLeft from "./paddleLeft";

export default class InputHandler {
  constructor(PaddleLeft, PaddleRight, game) {
    document.addEventListener("keydown", (event) => {
      switch (event.keyCode) {
        case 37:
          PaddleLeft.moveLeft();
          PaddleRight.moveLeft();
          break;

        case 39:
          PaddleLeft.moveRight();
          PaddleRight.moveRight();
          break;

        case 27:
          game.togglePause();
          break;

        case 32:
          game.start();
          break;
      }
    });

    document.addEventListener("keyup", (event) => {
      switch (event.keyCode) {
        case 37:
          if (PaddleLeft.speed != 0) PaddleLeft.stop();
          PaddleRight.stop();
          break;

        case 39:
          if (PaddleRight.speed != 0) PaddleRight.stop();
          PaddleLeft.stop();
          break;
      }
    });
  }
}
