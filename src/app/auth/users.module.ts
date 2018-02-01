export class Admin {
  id: number;
  username: string;
  password: string;

  constructor(
    id: number,
    username: string,
    password: string,
  ) {
    this.id = id;
    this.username = username;
    this.password = password;
  }
}

export class Therapist {
  id: number;
  name: string;
  plastname: string;
  mlastname: string;
  cedula: string;
  username: string;
  password: string;
  // falta agregar horarios
}

export class Patient { }
