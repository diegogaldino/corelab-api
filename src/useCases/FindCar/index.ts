import { CarRepository } from "../../repositories/implementations/CarRepository";
import { FindCarController } from "./FindCarController";
import { FindCarUseCase } from "./FindCarUseCase";


export default (): FindCarController => {
  const carsRepository = new CarRepository();

  const findCarUseCase = new FindCarUseCase(carsRepository);
  
  const findCarController = new FindCarController(
    findCarUseCase
  );

  return findCarController;
};
