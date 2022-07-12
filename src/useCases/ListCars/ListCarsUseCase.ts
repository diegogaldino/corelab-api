import { Car } from "../../entities/Car";
import { ICarRepository } from "../../repositories/ICarRepository";

class ListCarsUseCase {
  constructor(private carsRepository: ICarRepository) {}

  async execute(): Promise<Car[]> {
    const cars = await this.carsRepository.list();

    return cars;
  }
}

export { ListCarsUseCase };
