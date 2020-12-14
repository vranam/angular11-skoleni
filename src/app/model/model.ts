
export class Person {
  name: string;
  gender: Gender;

  constructor(name: string, gender: Gender) {
  }
}

export interface Animal {
  name: string;
  legs: number;
}

export enum Gender {
  MALE = 'MUZ',
  FEMALE = 'ZENA'
}

const zvire: Animal = {name: 'Aleš', legs: 20};
const osoba: Person = new Person('Eva', Gender.FEMALE);


