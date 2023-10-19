import { animalFn } from "./features/animal";

export default class Lion {
  constructor(name) {
    this.name = name;
  }
}

Object.assign(Lion.prototype, animalFn);
