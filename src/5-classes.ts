class TypeScrip {
  version: string;
  constructor(version: string) {
    this.version = version;
  }
  info(name: string) {
    return `[${name}]: TypeScript version is ${this.version}`;
  }
}

class Car {
  readonly model: string;
  readonly numberOfWheels: number = 4;

  constructor(theModel: string) {
    this.model = theModel;
  }
}

// class Car {
//   readonly model: string;
//   constructor(readonly model: string) {}
// }

class Animal {
  protected voice: string = "";
  public color: string = "black";
  private go() {
    console.log("go");
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice;
  }
}

const cat = new Cat();
cat.setVoice("Mau");

abstract class Component {
  abstract render(): void;
  abstract info(): string;
}

class AppComponen extends Component {
  render(): void {
    console.log("Component on render");
  }
  info(): string {
    return `This is info`;
  }
}
