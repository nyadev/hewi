export class Activity {
  constructor(
    public curp: string,
    public type: number,
    public numberOf: number,
    public level?: number,
    public phase?: number,
    public corrects?: number,
    public fails?: number,
    public date?: Date
  ) { }

  fullType() {
    return `hola bb como as estado`;
  }
}
