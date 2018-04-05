export class Session {
  id: number;
  curpt: string;
  curpp: string;
  date: Date;
  time: Date;
  sessionnumber: number;
  notes: string;

  constructor(
    id: number,
    curpt: string,
    curpp: string,
    date: Date,
    time: Date,
    sessionnumber: number,
    notes: string
  ) {
    this.id = id;
    this.curpt = curpt;
    this.curpp = curpp;
    this.date = date;
    this.time = time;
    this.sessionnumber = sessionnumber;
    this.notes = notes;
  }
}
