
import { ICarRepository } from "../../repositories/ICarRepository";

interface IRequest {
  id: string;
}

class DeleteCarUseCase {
  constructor(private carsRepository: ICarRepository) {}

  async execute({ id }: IRequest): Promise<void> {
  
    await this.carsRepository.deleteById( id );

  }
}

export { DeleteCarUseCase };
