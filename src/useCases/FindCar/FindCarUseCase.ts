import { Car } from "../../entities/Car";
import { ICarRepository } from "../../repositories/ICarRepository";

class FindCarUseCase {
  constructor(private carsRepository: ICarRepository) {}

  async execute(id:string): Promise<Car|null> {
    const cars = await this.carsRepository.findById(id);

    return cars;
  }
}

export { FindCarUseCase };
