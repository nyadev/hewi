import { Activity } from '../users/patient/activity/activity.model';

export class Patient {
  constructor(
    public therapist: string,
    public curp: string,
    public birth: Date,
    public sex: string,
    public age: number,
    public lat: string,
    public scholarship: string,

    public phone: number,
    public cellPhone: number,
    public street: string,
    public extNumber: number,
    public intNumber: number,
    public col: string,
    public del: string,
    public cp: number,
    public state: string,

    public firstNameT: string,
    public pNameT: string,
    public mNameT: string,
    public ageT: number,
    public scholarshipT: string,

    public activities?: Activity []
  ) {
    this.activities = [];
  }
}
