export class User {
  constructor(
    public email: string,
    public password: string,
    public _id?: number,
    public firstName?: string,
    public pName?: string,
    public mName?: string,
    public curp?: string,
    public userType?: string,
  ) {  }

  fullName() {
    return `${this.firstName} ${this.pName} ${this.mName}`;
  }
}
