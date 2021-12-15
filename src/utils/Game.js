function createMap(data) {
  const map = [];
  const rows = data.split("\n");
  rows.forEach((row) => {
    map.push(row.split(""));
  });
  return map;
}

function Game(map) {
  this.map = map;
  this.currentPos = this.getCurrentPos();
  this.score = 0;
  this.instructionsGiven = 0;
}

Game.prototype.showMap = function () {
  console.clear();
  const mapImg = this.map
    .map((row) => {
      return row.join("");
    })
    .join("\n");
  console.log(mapImg);
  this.showScore();
};
Game.prototype.getCurrentPos = function () {
  let curX;
  let curY;
  this.map.forEach((row, rowI) => {
    row.forEach((item, itemI) => {
      if (item === "N") {
        curX = itemI;
        curY = rowI;
      }
    });
  });
  return [curX, curY];
};
Game.prototype.move = function (direction) {
  const [curX, curY] = this.currentPos;
  const [newX, newY] = this.getNextCoords(direction);
  const nextSpot = this.map[newY][newX];
  this.checkForScore(nextSpot);
  if (nextSpot !== "0") {
    this.map[newY][newX] = "N";
    this.map[curY][curX] = " ";
    this.currentPos = [newX, newY];
    this.move(direction);
  } else {
    this.instructionsGiven++;
  }
};
Game.prototype.checkForScore = function (gameSpace) {
  if (gameSpace === "^") this.score += 100;
};
Game.prototype.showScore = function () {
  console.log(`Score: ${this.score}`);
  console.log(`Instructions Given: ${this.instructionsGiven}`);
};
Game.prototype.getMap = () => {
  return this.map;
};
Game.prototype.getNextCoords = function (direction) {
  const [curX, curY] = this.currentPos;
  const directions = {
    up: [curX, curY - 1],
    down: [curX, curY + 1],
    right: [curX + 1, curY],
    left: [curX - 1, curY],
  };
  return directions[direction];
};

module.exports = { Game, createMap };
