import { Person } from './models/Person';

let kevin: Person;

kevin.name = 'Kevin';
kevin.adult = true;

let x = 1;

var unionType: string | null;
type Role = 'Admin' | 'User' | 'ReadOnly';
// var observer: Role = "Observer"; // not allowed
var admin: Role = 'Admin';

function doWork(worker: Person): string {
  return 'return type of string';
}

function printLabel(labelledObj: { label: string }) {
  console.log(labelledObj.label);
}

let myObj = { size: 10, label: 'Size 10 Object' };
printLabel(myObj);

// alternative:
interface IPrintable {
  label: string;
}

function printLabelWithInterface(labelledObj: IPrintable) {
  console.log(labelledObj.label);
}

// interfaces with functions required:
interface IDoWork {
  doWork(label: string): number;
}

// functional interface
interface IFunction {
  (label: string): number;
}

// function doExtraWork: IFunction {}

// class PropertySamples{
//     private _fullName: string;

//     get fullName(): string {
//         return this._fullName;
//     }

//     set fullName(fullName: string) {
//         this._fullName = fullName;
//     }
// }

// this can be simplified to:
class ConstructorSammple1 {
  private rootUrl: string;

  constructor(rootUrl: string) {
    this.rootUrl = rootUrl;
  }
}

// this can be simplified to:
class ConstructorSample2 {
  constructor(private rooteUrl: string) {}
}

// only do this with with things that you will provide in the constructor

class MiscSamples {
  funcFields: (x: number, y: number) => boolean;

  // doWork(func: funcFields): any {
  // }
}

// you  can use generics in TypeScript
