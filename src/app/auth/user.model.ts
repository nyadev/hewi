import { Therapist } from './therapist.model';
import { Patient } from './patient.model';

export class User {
  constructor(
    public email: string,
    public password: string,
    public firstName?: string,
    public pName?: string,
    public mName?: string,
    public userType?: string,
    public therapistInfo?: Therapist,
    public patientInfo?: Patient
  ) {  }
}
