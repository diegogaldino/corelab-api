import { Request, Response } from "express";
import { UpdateCarUseCase } from "./UpdateCarUseCase";

class UpdateCarController {
  constructor(private updateCarUseCase: UpdateCarUseCase) {}

  async handle(request: Request, response: Response): Promise<Response>{
    console.log(request.body)
    const { id, model, manufacturer, description, color, year, license, favorite, price } = request.body;
    
    await this.updateCarUseCase.execute({ id, model, manufacturer, description, color, year, license, favorite, price });

    return response.status(200).send();
  }
}

export { UpdateCarController };
