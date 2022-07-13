import { Request, Response } from "express";
import { SearchCarUseCase } from "./SearchCarUseCase";

class SearchCarController {
  constructor(private searchCarUseCase: SearchCarUseCase) {}

  async handle(request: Request, response: Response): Promise<Response>{
    const { manufacturer, color, year, priceMin, priceMax } = request.params;

    const cars = await this.searchCarUseCase
      .execute({manufacturer, color, year:Number(year), priceMin:parseInt(priceMin), priceMax:parseInt(priceMax)});

    return response.json(cars);
  }
}

export { SearchCarController };
