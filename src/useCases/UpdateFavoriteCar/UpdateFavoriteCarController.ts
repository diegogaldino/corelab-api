import { Request, Response } from "express";
import { UpdateFavoriteCarUseCase } from "./UpdateFavoriteCarUseCase";


class UpdateFavoriteCarController {
  constructor(private updateFavoriteCarUseCase: UpdateFavoriteCarUseCase) {}

  async handle(request: Request, response: Response): Promise<Response>{
    console.log(request.body)
    const { id, favorite } = request.body;
    
    await this.updateFavoriteCarUseCase.execute({ id, favorite });

    return response.status(200).send();
  }
}

export { UpdateFavoriteCarController };
