import { CarRepository } from "../../repositories/implementations/CarRepository";
import { DeleteCarController } from "./DeleteCarController";
import { DeleteCarUseCase } from "./DeleteCarUseCase";


export default (): DeleteCarController => {
  const carsRepository = new CarRepository();

  const deleteCarUseCase = new DeleteCarUseCase(carsRepository);
  
  const deleteCarController = new DeleteCarController(
    deleteCarUseCase
  );

  return deleteCarController;
};
