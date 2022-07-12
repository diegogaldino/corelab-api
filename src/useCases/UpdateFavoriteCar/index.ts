import { CarRepository } from "../../repositories/implementations/CarRepository";
import { UpdateFavoriteCarController } from "./UpdateFavoriteCarController";
import { UpdateFavoriteCarUseCase } from "./UpdateFavoriteCarUseCase";


export default (): UpdateFavoriteCarController => {
  const carsRepository = new CarRepository();

  const updateFavoriteCarUseCase = new UpdateFavoriteCarUseCase(carsRepository);
  
  const updateFavoriteCarController = new UpdateFavoriteCarController(
    updateFavoriteCarUseCase
  );

  return updateFavoriteCarController;
};
