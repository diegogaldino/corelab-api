import { v4 as uuidV4 } from "uuid";

class Car {

  id?: string;
  model!: string;
  manufacturer!: string;
  color!: string;
  description!: string;
  favorite!: boolean;
  license!: string;
  price!:number;
  year!: number;
  created_at?: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Car };
