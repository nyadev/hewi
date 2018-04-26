export class Session {
  id: number;
  curpp: string;
  date: Date;
  notes: string;
  createdAt: Date;

  constructor(
    id: number,
    curpp: string,
    date: Date,
    notes: string,
    createdAt: Date
  ) {
    this.id = id;
    this.curpp = curpp;
    this.date = date;
    this.notes = notes;
    this.createdAt = createdAt;
  }
}
