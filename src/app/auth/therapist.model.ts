import { Session } from '../users/therapist/diary/sessions/session.model';

export class Therapist {
  constructor(
    public cedula: string,
    public lunes: string,
    public martes: string,
    public miercoles: string,
    public jueves: string,
    public viernes: string,
    public sabado: string,
    public domingo: string,
    public sessions?: Session[]
  ) {
    this.sessions = [];
  }
}
