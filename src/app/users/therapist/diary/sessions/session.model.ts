export class Session {
  id: number;
  curp: string;
  date: Date;
  sessionnumber: number;
  notes: string;

  constructor(
    id: number,
    curp: string,
    date: Date,
    sessionnumber: number,
    notes: string
  ) {
    this.id = id;
    this.curp = curp;
    this.date = date;
    this.sessionnumber = sessionnumber;
    this.notes = notes;
  }
}
