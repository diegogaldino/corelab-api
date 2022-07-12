import { Request, Response } from "express";
import { FindCarUseCase } from "./FindCarUseCase";



class FindCarController {
  constructor(private findCarUseCase: FindCarUseCase) {}

  async handle(request: Request, response: Response): Promise<Response>{
    const { id } = request.params;
    const car = await this.findCarUseCase.execute(id);

    return response.json(car);
  }
}

export { FindCarController };
