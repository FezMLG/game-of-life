import { test } from "../src";

export class Board {
  board: number[][] = [];

  constructor() {}

  createCustomBoard(board: any[]) {
    this.board = board;
  }

  getBoard(): any {
    return this.board;
  }
  createBoard(arg0: number) {
    for (let i = 0; i < arg0; i++) {
      let toPush = [];
      for (let j = 0; j < arg0; j++) {
        toPush.push(0);
      }
      this.board.push(toPush);
    }
    console.log(this.board);
    return this;
  }

  getAllNeighbors(x: number, y: number, board: any[]) {
    let aliveNeighbors = 0;
    for (let i = x - 1; i <= x + 1; i++) {
      for (let j = y - 1; j <= y + 1; j++) {
        if (j - 1 < 0 || j + 1 > board.length) continue;
        if (i - 1 < 0 || i + 1 > board.length) continue;
        if (i === x && j === y) continue;
        if (board[i][j] === 1) aliveNeighbors++;
      }
    }
    return aliveNeighbors;
  }
}

describe("GOL", () => {
  let game = new Board();
  beforeEach(() => {
    game = new Board();
  });
  it("should create new instance of class", () => {
    expect(game).toBeTruthy;
  });

  it("should create new game array and return it", () => {
    game.createBoard(3);
    expect(game.getBoard()).toHaveLength(3);
  });

  it("should calculate number o alive neighbors", () => {
    const board = [
      [0, 0, 0],
      [0, 1, 1],
      [0, 1, 0],
    ];
    game.createCustomBoard(board);
    const nei = game.getAllNeighbors(0, 0, board);
    expect(nei).toBe(1);
  });
});
