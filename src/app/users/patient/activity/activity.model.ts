export class Activity {
  id_user: number;
  type: number;
  numberOf: number;
  level?: number;
  corrects?: number;
  fails?: number;
  ntry?: number;

  constructor(
    id_user: number,
    type: number,
    numberOf: number,
    level?: number,
    corrects?: number,
    fails?: number,
    ntry?: number
  ) {
    this.id_user = id_user;
    this.type = type;
    this.numberOf = numberOf;
    this.level = level;
    this.corrects = corrects;
    this.fails = fails;
    this.ntry = ntry;
  }
}
