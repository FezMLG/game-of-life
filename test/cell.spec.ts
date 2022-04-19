export class Cell {
  constructor(public state: 0 | 1 | number, private neighbors: number) {}

  getState() {
    return this.state;
  }

  changeState() {
    this.state === 1 ? (this.state = 0) : (this.state = 1);
    return this;
  }

  tick() {
    if (this.neighbors === 3) {
      this.state = 1;
    } else if (this.neighbors === 2 && this.state === 1) {
      this.state = 1;
    } else {
      this.state = 0;
    }
    return this;
  }
}

describe("Cell", () => {
  it("should return its own state", () => {
    const cell = new Cell(0, 0);
    expect(cell.getState()).toBe(0);
  });

  it("should change state", () => {
    const cell = new Cell(0, 0);
    cell.changeState();
    expect(cell.getState()).toBe(1);
  });

  it("should remain dead when neighbors less or more than 3", () => {
    const cell = new Cell(0, 0);
    cell.tick();
    expect(cell.getState()).toBe(0);
  });

  it("should become alive when it has three alive neighbors", () => {
    const cell = new Cell(0, 3);
    cell.tick();
    expect(cell.getState()).toBe(1);
  });

  it("should stay alive when it has two alive neighbors", () => {
    const cell = new Cell(1, 2);
    cell.tick();
    expect(cell.getState()).toBe(1);
  });
});
