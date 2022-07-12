import { Request, Response } from "express";
import { DeleteCarUseCase } from "./DeleteCarUseCase";

class DeleteCarController {
  constructor(private deleteCarUseCase: DeleteCarUseCase) {}

  async handle(request: Request, response: Response): Promise<Response>{
    console.log(request.params)
    const { id } = request.params;
    
    await this.deleteCarUseCase.execute({ id });

    return response.status(200).send();
  }
}

export { DeleteCarController };
