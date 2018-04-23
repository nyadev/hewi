export class Activity {
  curp: string;
  type: number;
  numberOf: number;
  level?: number;
  phase?: number;
  corrects?: number;
  fails?: number;
  date?: Date;

  constructor(
    curp: string,
    type: number,
    numberOf: number,
    level?: number,
    phase?: number,
    corrects?: number,
    fails?: number,
    date?: Date
  ) {
    this.curp = curp;
    this.type = type;
    this.numberOf = numberOf;
    this.level = level;
    this.phase = phase;
    this.corrects = corrects;
    this.fails = fails;
    this.date = date;
  }
}
