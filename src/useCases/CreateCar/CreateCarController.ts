import { Request, Response } from "express";
import { CreateCarUseCase } from "./CreateCarUseCase";

class CreateCarController {
  constructor(private createCarUseCase: CreateCarUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { model, manufacturer, description, color, year, license, favorite, price } = request.body;

    await this.createCarUseCase.execute({ model, manufacturer, description, color, year, license, favorite, price });

    return response.status(201).send();
  }
}

export { CreateCarController };
