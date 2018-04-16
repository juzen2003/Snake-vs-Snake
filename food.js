class Food {
  constructor() {
    this.unitSize = 20;
    this.foodPos;
  }

  drawFood(ctx) {
    const foodRadius = this.unitSize / 2;
    ctx.beginPath();
    // make it circle, can change later
    ctx.arc(this.foodPos.x * this.unitSize + this.unitSize/2 , this.foodPos.y * this.unitSize + this.unitSize/2, foodRadius, 0, Math.PI*2);
    ctx.fillStyle = "#3D9728";
    ctx.fill();
    ctx.closePath();
  }

  drawRandomFood(canvasWidth, canvasHeight, snake) {
    let randomX = Math.floor( Math.random() * (canvasWidth / this.unitSize));
    let randomY = Math.floor( Math.random() * (canvasHeight / this.unitSize));
    // debugger
    //make sure food is not generated at snake's position
    for(let i = 0; i < snake.length; i++) {
      if (snake[i].x === randomX || snake[i].y === randomY || snake[i].x === randomX && snake[i].y === randomY) {
        randomX = Math.floor( Math.random() * (canvasWidth / this.unitSize));
        randomY = Math.floor( Math.random() * (canvasHeight / this.unitSize));
      }
    }

    this.foodPos = {x: randomX, y: randomY};
  }
}

export default Food;