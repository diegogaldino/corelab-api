import { Car } from "../../entities/Car";
import { ICarRepository } from "../../repositories/ICarRepository";

interface IRequest {
  manufacturer: string;
  color: string;
  year: number;
  priceMin: number;
  priceMax: number;
}

class SearchCarUseCase {
  constructor(private carsRepository: ICarRepository) {}

  async execute({manufacturer, color, year, priceMin, priceMax}:IRequest): Promise<Car[]> {
    const cars = await this.carsRepository.findByOptions({manufacturer, color, year, priceMin, priceMax});

    return cars;
  }
}

export { SearchCarUseCase };
