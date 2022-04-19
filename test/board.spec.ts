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

  // createNewCells() {
  //   const bbb = this.board;
  //   const checkUpperLevel = (i: number, j: number) => {
  //     let numOfNeighbors = 0;
  //     if (bbb[i - 1][j - 1] == 1) {
  //       numOfNeighbors++;
  //     }
  //     if (bbb[i - 1][j] == 1) {
  //       numOfNeighbors++;
  //     }
  //     if (bbb[i - 1][j + 1] == 1) {
  //       numOfNeighbors++;
  //     }
  //     console.log("upper", i, j, numOfNeighbors);
  //     return numOfNeighbors;
  //   };
  //   const checkLowerLevel = (i: number, j: number) => {
  //     let numOfNeighbors = 0;
  //     if (bbb[i + 1][j - 1] == 1) {
  //       numOfNeighbors++;
  //     }
  //     if (bbb[i + 1][j] == 1) {
  //       numOfNeighbors++;
  //     }
  //     if (bbb[i + 1][j + 1] == 1) {
  //       numOfNeighbors++;
  //     }
  //     console.log("lower", i, j, numOfNeighbors);
  //     return numOfNeighbors;
  //   };
  //   const checkSameLevel = (i: number, j: number) => {
  //     let numOfNeighbors = 0;
  //     if (bbb[i][j - 1] == 1) {
  //       numOfNeighbors++;
  //     }
  //     if (bbb[i][j + 1] == 1) {
  //       numOfNeighbors++;
  //     }
  //     console.log("same", i, j, numOfNeighbors);
  //     return numOfNeighbors;
  //   };
  //   for (let i = 1; i < bbb.length - 1; i++) {
  //     for (let j = 1; j < bbb[i].length - 1; j++) {
  //       let cell = bbb[i][j];
  //       let numOfNeighbors = 0;
  //       //same level
  //       numOfNeighbors += checkSameLevel(i, j);
  //       //upper level
  //       numOfNeighbors += checkUpperLevel(i, j);
  //       //lower level
  //       numOfNeighbors += checkLowerLevel(i, j);

  //       if (numOfNeighbors == 3) {
  //         bbb[i][j] = 1;
  //       }
  //       console.log(numOfNeighbors);
  //     }
  //   }
  //   console.log(this.board);
  //   return this;
  // }
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

  // it("should calculate if cell can live", () => {
  //   const board = [
  //     [0, 0, 0],
  //     [0, 1, 1],
  //     [0, 1, 0],
  //   ];

  //   const boardAfterTick = [
  //     [0, 0, 0],
  //     [0, 1, 1],
  //     [0, 1, 1],
  //   ];
  //   game.createCustomBoard(board);
  //   // game.tick();
  //   expect(game.createNewCells().getBoard()).toBe(boardAfterTick);
  // });
});
