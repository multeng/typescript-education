interface Rect {
  readonly id: string;
  color?: string;
  size: {
    width: number;
    height: number;
  };
}

const rect1: Rect = {
  id: "111",
  size: {
    width: 20,
    height: 30,
  },
  color: "#ccc",
};

const rect2 = {} as Rect;
const rect3 = <Rect>{};

interface RectWithArea extends Rect {
  getArea: () => number;
}

const react4: RectWithArea = {
  id: "333",
  size: {
    width: 100,
    height: 100,
  },
  getArea(): number {
    return this.size.width * this.size.height;
  },
};

interface IClock {
  time: Date;
  setTime(date: Date): void;
}

class Clock implements IClock {
  time: Date = new Date();
  setTime(date: Date): void {
    this.time = date;
  }
}

interface Styles {
  [key: string]: string
}

const css: Styles = {
  border: "1px solid black",
  marginTop: "2px",
  borderRadius: "5px",
};
