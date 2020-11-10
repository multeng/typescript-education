const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 33;
const float: number = 4.1;
const num: number = 3e10;

const string: string = "vova";

const numberArray: number[] = [1, 2, 3];
const numberArray2: Array<number> = [1, 2, 3];
const stringArray: Array<string> = ["h", "i"];

//Tuple

const contact: [string, number] = ["Vova", 89161234567];

//Any

let variable: any = 42;

variable = "Vova";
variable = true;

// functions

function sayMyName(name: string): void {
  console.log(name);
}

sayMyName("Vova");

//Never
function thorError(message: string): never {
  throw new Error(message);
}

function infinite(): never {
  while (true) {}
}
//Type
type Login = string;

const login: Login = "admin";

type id = string | number;

const ID1 = 0;
const ID2 = "dsada";

type someType = string | null | undefined;
