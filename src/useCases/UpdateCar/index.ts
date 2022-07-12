import { CarRepository } from "../../repositories/implementations/CarRepository";
import { UpdateCarController } from "./UpdateCarController";
import { UpdateCarUseCase } from "./UpdateCarUseCase";

export default (): UpdateCarController => {
  const carsRepository = new CarRepository();

  const updateCarUseCase = new UpdateCarUseCase(carsRepository);
  
  const updateCarController = new UpdateCarController(
    updateCarUseCase
  );

  return updateCarController;
};
