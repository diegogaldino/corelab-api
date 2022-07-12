import { Car } from "../../entities/Car";
import { ICarRepository } from "../../repositories/ICarRepository";

interface IRequest {
  id: string;
  model: string;
  manufacturer: string;
  color: string;
  description: string;
  year: number;
  price: number;
  license: string;
  favorite: boolean;
}

class UpdateCarUseCase {
  constructor(private carsRepository: ICarRepository) {}

  async execute({ id, model, manufacturer, description, color, year, license, favorite, price }: IRequest): Promise<void> {
  
    await this.carsRepository.updateById({id, model, manufacturer, description, color, year, license, favorite, price});

  }
}

export { UpdateCarUseCase };
