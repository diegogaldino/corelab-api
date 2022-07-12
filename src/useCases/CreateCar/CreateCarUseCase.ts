import { ICarRepository } from "../../repositories/ICarRepository";

interface IRequest {
  model: string;
  manufacturer: string;
  color: string;
  description: string;
  year: number;
  price: number;
  license: string;
  favorite: boolean;
}

class CreateCarUseCase {
  constructor(private carRepository: ICarRepository) {}

  async execute({ model, manufacturer, description, color, year, license, favorite, price }: IRequest): Promise<void> {
    // const categoryAlreadyExists = await this.carRepository.findByName(
    //   name
    // );

    // if (categoryAlreadyExists) {
    //   throw new Error("Category already exists");
    // }

    this.carRepository.create({ model, manufacturer, description, color, year, license, favorite, price });
  }
}

export { CreateCarUseCase };
