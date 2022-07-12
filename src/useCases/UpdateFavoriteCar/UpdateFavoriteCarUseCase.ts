import { ICarRepository } from "../../repositories/ICarRepository";

interface IRequest {
  id: string;
  favorite: boolean;
}

class UpdateFavoriteCarUseCase {
  constructor(private carsRepository: ICarRepository) {}

  async execute({ id, favorite }: IRequest): Promise<void> {
  
    await this.carsRepository.updateFavoriteById({id, favorite});

  }
}

export { UpdateFavoriteCarUseCase };
