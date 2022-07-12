import { CarRepository } from "../../repositories/implementations/CarRepository";
import { CreateCarController } from "./CreateCarController";
import { CreateCarUseCase } from "./CreateCarUseCase";

export default (): CreateCarController => {
  const carRepository = new CarRepository();

  const createCarUseCase = new CreateCarUseCase(carRepository);

  const createCarController = new CreateCarController(
    createCarUseCase
  );

  return createCarController;
};
