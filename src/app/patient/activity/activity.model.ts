export class Activity {
  type: string;
  numberOf: number;
  level?: number;
  corrects?: number;
  fails?: number;

  constructor(
    type: string,
    numberOf: number,
    level?: number,
    corrects?: number,
    fails?: number
  ) {
    this.type = type;
    this.numberOf = numberOf;
    this.level = 1;
    this.corrects = 0;
    this.fails = 0;
  }
}
