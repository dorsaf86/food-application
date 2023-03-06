import { Time } from "@angular/common";

export class reservation{
  id_reservation?: number;
  email?: string;
  username?: string;
  nbPersonnes?: number;
  date?: Date;
  time?: Time;
  allergy?:string;
}
