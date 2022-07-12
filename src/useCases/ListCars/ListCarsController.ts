import { Request, Response } from "express";
import { ListCarsUseCase } from "./ListCarsUseCase";


class ListCarsController {
  constructor(private listCarsUseCase: ListCarsUseCase) {}

  async handle(request: Request, response: Response): Promise<Response>{
    const all = await this.listCarsUseCase.execute();

    return response.json(all);
  }
}

export { ListCarsController };
