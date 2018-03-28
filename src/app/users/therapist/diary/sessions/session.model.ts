export class Session {
  id: number;
  patient_id: number;
  therapist_id: number;
  curp: string;
  date: Date;
  time: Date;
  sessionnumber: number;
  notes: string;

  constructor(
    id: number,
    patient_id: number,
    therapist_id: number,
    curp: string,
    date: Date,
    time: Date,
    sessionnumber: number,
    notes: string
  ) {
    this.id = id;
    this.patient_id = patient_id;
    this.therapist_id = therapist_id;
    this.curp = curp;
    this.date = date;
    this.time = time;
    this.sessionnumber = sessionnumber;
    this.notes = notes;
  }
}
