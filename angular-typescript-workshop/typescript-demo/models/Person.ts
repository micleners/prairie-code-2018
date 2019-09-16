export interface Person {
    // constructor(parameters = {age: }) {
    //     this.age = parameters.age ?  parameters.age : null;
    //     this.name = parameters.name ?  parameters.name : null;
    //     this.adult = parameters.adult ?  parameters.adult : null;
    // }
    age: number;
    name: string;
    adult: boolean;
}